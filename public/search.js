const searchClient = algoliasearch(
  "MRVE6SK1ZX",
  "5c0aa34c3ea19295ad0fd2474c97e54d"
);

const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("q");

const search = instantsearch({
  indexName: "tims_site_pages",
  searchClient,
  initialUiState: {
    tims_site_pages: {
      query: searchQuery,
    },
  },
});

const { searchBox, hits, index } = instantsearch.widgets;

function parseImage(imageUrl) {
  const decodedUrl = decodeURIComponent(imageUrl);

  const parsedImage = decodedUrl.split(
    "https://media.dev.to/cdn-cgi/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/"
  )[1];

  return `https://res.cloudinary.com/dwfcofnrd/image/fetch/f_auto,q_auto,w_350,h_197,c_thumb/${parsedImage}`;
}

search.addWidgets([
  searchBox({
    container: "#searchbox",
    placeholder: "Search here",
    autofocus: true,
    showReset: false,
    showSubmit: false,
    showLoadingIndicator: false,
    queryHook(query, search) {
      search(query);
    },
  }),

  hits({
    container: "#hits-pages",
    templates: {
      item: (hit, { html, components }) => html`
        <a href="${hit.url}" id="${hit.objectID}">
          <img
            src="${hit.image}"
            alt="${hit.title}"
            width="350"
            height="197"
            loading="lazy"
            class="mb-2 fancy-image w-full"
          />

          <div>
            <p class="font-bold text-xl line-clamp-2">
              ${hit.title.replace(" - Tim Benniks", "")}
            </p>
            <p class="line-clamp-2 text-slate-400 text-sm">
              ${hit.description}
            </p>
          </div>
        </a>
      `,
    },
  }),

  index({ indexName: "tims_site_articles" }).addWidgets([
    hits({
      container: "#hits-articles",
      templates: {
        item: (hit, { html, components }) => html`
          <a href="${hit.url}" id="${hit.objectID}">
            <img
              src="${parseImage(hit.image)}"
              alt="${hit.headline}"
              width="350"
              height="197"
              loading="lazy"
              class="mb-2 fancy-image w-full"
            />

            <div>
              <p class="font-bold text-xl line-clamp-2">${hit.headline}</p>
              <p class="line-clamp-2 text-slate-400 text-sm">
                ${hit.description}
              </p>
            </div>
          </a>
        `,
      },
    }),
  ]),

  index({ indexName: "tims_site_videos" }).addWidgets([
    hits({
      container: "#hits-videos",
      templates: {
        item: (hit, { html, components }) => html`
          <a href="${hit.url}" id="${hit.objectID}">
            <img
              src="${hit.image}"
              alt="${hit.title}"
              width="350"
              height="197"
              loading="lazy"
              class="mb-2 fancy-image w-full"
            />

            <div>
              <p class="font-bold text-xl line-clamp-2">${hit.title}</p>
              <p class="line-clamp-2 text-slate-400 text-sm">
                ${hit.description}
              </p>
            </div>
          </a>
        `,
      },
    }),
  ]),
]);

search.start();
