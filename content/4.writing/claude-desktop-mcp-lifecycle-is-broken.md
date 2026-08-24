---
title: Claude Desktop MCP lifecycle is broken
slug: claude-desktop-mcp-lifecycle-is-broken
description: Claude Desktop currently launches duplicate local MCP stdio servers for a single configuration, causing two independent OAuth flows, extra browser tabs, and unnecessary resource usage. The bug is masked once credentials are cached, so it silently persists in production while still spawning two processes every time. This is not an mcp-remote or external service issue but a host-level lifecycle problem, likely caused by overlapping legacy and new MCP managers and poor observability for one of the processes. Workarounds like pre-authenticating with mcp-remote mitigate UX pain but do not fix the duplication. The article argues that open-source tools should not shoulder complex coordination logic just to survive a major desktop app’s sloppy process management.
date: "2026-08-24T10:00:00Z"
canonical_url: https://timbenniks.dev/writing/claude-desktop-mcp-lifecycle-is-broken
reading_time: 7 min read
image: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1787604216/website/vibes.png
tags:
  - ai
  - webdev
  - architecture
  - devops
  - performance
  - dxp
  - process
faqs:
  - question: What is the core bug described with Claude Desktop and MCP servers?
    answer: Claude Desktop starts two independent instances of the same local stdio MCP server for a single configuration. Each instance runs in its own process tree with its own wrapper and Node process, which leads to duplicate OAuth flows and wasted resources. The issue is not with mcp-remote or the external OAuth provider, but with Claude Desktop’s internal lifecycle logic, where two separate subsystems both attempt to own and launch the same local MCP configuration.
  - question: How can users work around the duplicate OAuth tab problem in Claude Desktop?
    answer: Users have two practical workarounds. First, if Claude opens two browser tabs, they can simply complete the OAuth flow in the first tab and close or ignore the second, since one authorization is sufficient. Second, they can pre-authenticate from the terminal by running the exact `npx -y mcp-remote <REMOTE_MCP_URL>` command used in their Claude configuration. After completing the OAuth flow and stopping the terminal process, both Claude-launched instances will reuse the cached credentials and avoid opening extra tabs.
  - question: Why does the author argue this bug is unfair to open-source maintainers?
    answer: The author points to an open pull request in the mcp-remote project that implements complex defensive logic solely to survive Claude Desktop’s broken lifecycle. This includes lock coordination, avoiding race conditions between sibling processes, careful PKCE handling, and token sharing, all backed by multiple new tests. The author argues that an open-source adapter should not need distributed-systems-style coordination just because a proprietary desktop host cannot manage child processes correctly. This shifts responsibility and engineering burden from the desktop vendor onto community maintainers.
draft: false
head:
  meta:
    - property: twitter:image
      content: https://res.cloudinary.com/dwfcofnrd/image/upload/f_auto,q_auto/v1787604216/website/vibes.png
    - property: twitter:title
      content: Claude Desktop MCP lifecycle is broken
    - property: twitter:description
      content: Claude Desktop currently launches duplicate local MCP stdio servers for a single configuration, causing two independent OAuth flows, extra browser tabs, and unnecessary resource usage. The bug is masked once credentials are cached, so it silently persists in production while still spawning two processes every time. This is not an mcp-remote or external service issue but a host-level lifecycle problem, likely caused by overlapping legacy and new MCP managers and poor observability for one of the processes. Workarounds like pre-authenticating with mcp-remote mitigate UX pain but do not fix the duplication. The article argues that open-source tools should not shoulder complex coordination logic just to survive a major desktop app’s sloppy process management.
    - property: keywords
      content: ai, webdev, architecture, devops, performance, dxp, process

---

Or the real title: Claude Desktop is sloppy vibe trash... ok, back to nice writing now.

I spent half of today debugging what looked like a routine OAuth bug. I configured a single local stdio MCP server in Claude Desktop. When I launched the app, it immediately opened two authentication tabs for the exact same service at the exact same time.

OAuth is finicky enough that two tabs doesn't immediately yell "desktop lifecycle bug." I started where any developer would: checking the external service, the callback URL, the local token cache, and `mcp-remote`.

Every single one of those components was doing what it was asked to do. The problem was simple: Claude Desktop asked them to do it twice.

## Finding the duplicate process tree

The first clue appeared in Claude’s internal logs. Right at startup, the standard MCP lifecycle reported this:

```
MCP Server connection requested for: my-mcp-server
Launching MCP Server: my-mcp-server
```

In the exact same second, another subsystem logged this:

```
[LocalMcpServerManager] Connecting to my-mcp-server
```

That could have been duplicate logging from two internal modules. Annoying, but harmless. But when I checked the macOS process tree, I found two completely separate parent-child branches running under Claude:

```
Claude
├── wrapper -> npm -> mcp-remote
└── wrapper -> npm -> mcp-remote
```

Each branch had its own PID, its own wrapper, and its own Node process running `mcp-remote`. This wasn't a logging artifact. Claude was spinning up two independent instances of the same configured server.

From their own perspective, both instances behaved correctly. Both started up, checked `~/.mcp-auth`, found no cached token, and initiated an OAuth flow. The external service saw two distinct clients asking for authorization, so it opened two tabs. The browser tabs were just the symptom. The real bug was Claude Desktop launching the same server twice.

## The authentication mask

The authentication flow made the sequence easy to prove:

-   **Fresh credentials:** 2 processes, 2 OAuth flows, 2 tabs.
    
-   **Cached credentials:** 2 processes, 0 tabs.
    

Once you authenticate in the first tab and save the credentials, restarting Claude still launches two `mcp-remote` processes. They simply grab the cached token without opening a browser tab.  

```
Fresh credentials: 2 processes, 2 OAuth flows, 2 tabs
Cached credentials: 2 processes, 0 tabs
```

This is why bugs like this survive in production. Once a developer authenticates during testing, the annoying UI symptom disappears. Under the hood, the application is still wasting resources and running duplicate client processes for a single configuration.

## Isolating the host

To verify that `mcp-remote` or the external service wasn't at fault, I tested other local MCP servers: Turbo Relay and Open Loops. Both of them launched twice.

That ruled out the proxy and confirmed the host bug. A package cannot magically fork its own parent chain beneath Claude with different wrapper PIDs. Claude Desktop itself is triggering both launch paths.

The architecture split in the logs makes this even clearer. Claude Desktop appears to run a legacy MCP server lifecycle alongside a newer `LocalMcpServerManager`, with tools later announced through a `localMcpBridge`. Two internal managers both think they own the same local stdio configuration.

To make matters worse, there is a clear observability gap. The dedicated per-server log only accounts for **one** of the two process IDs. The second process runs completely in the dark, invisible to the server-specific log, while remaining fully alive in the operating system.

## The workarounds

If you hit this issue, you have two options.

If Claude has already opened two tabs, complete the flow in the first tab and close or ignore the second. One authorization is enough.

Alternatively, you can pre-authenticate from your terminal before opening Claude Desktop:

```
npx -y mcp-remote <REMOTE_MCP_URL>
```

Run the exact command and arguments from your Claude configuration, complete the OAuth flow in your browser, and stop the terminal process. When Claude Desktop starts, both duplicate processes will read the cached credentials from `~/.mcp-auth`, preventing the extra browser tabs.

This workaround fixes the user experience, but it doesn't fix the underlying bug. Claude is still running two server instances. If your local MCP server does heavy startup work, expects to be a singleton, or triggers side effects on connection, this stops being a minor UI glitch.

## The open-source tax

The most frustrating part of this investigation was looking at how the open-source ecosystem is forced to compensate for host bugs.

There is an open pull request on `geelen/mcp-remote` ([PR #320](https://github.com/geelen/mcp-remote/pull/320)) titled _"Survive hosts that start and stop instances during the OAuth flow."_ The description explicitly names Claude Desktop and reports this exact duplicate process behavior.

The PR contains extensive defensive engineering. The author added logic to:

-   Detect when the process owning the auth lock dies.
    
-   Prevent one instance from deleting another instance's lock file.
    
-   Wait for instance coordination before opening a browser tab.
    
-   Bind PKCE verifiers to the OAuth state instead of the process PID.
    
-   Share tokens between surviving sibling processes.
    

It includes nine new unit tests just to survive Claude Desktop's broken lifecycle.

While this is impressive open-source engineering, the responsibility is completely upside down. An open-source adapter package shouldn't have to build distributed systems coordination logic just to survive a desktop app that cannot manage child processes cleanly. We are taxing open-source maintainers because a major desktop product fails to enforce basic lifecycle rules.

## Pure vibes...

This is where the term "vibe-coded" starts to fit. Features accumulated faster than core architecture can handle.

A basic regression test could spin up Claude Desktop, count the process launches for a single server configuration, and fail if the answer is anything other than one. It wouldn't look flashy in a product demo, but it protects the stability of the entire integration layer.

Claude Desktop is the primary entry point for a serious AI product, and MCP is a serious integration standard. Once a desktop application starts executing local binaries, managing OAuth credentials, and bridging tools, process lifecycle management is no longer an obscure detail. It is a core requirement.

I use Claude every day and love the models, but great AI models cannot excuse fragile desktop engineering. Brilliant AI features still depend on the unglamorous fundamentals of software engineering: clean process ownership, a single source of truth, proper logging, and tests that can count to one.

I filed the bug report. I don't think I'll hear back... let's see.