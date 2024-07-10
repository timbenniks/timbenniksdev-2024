const searchClient = algoliasearch(
  "MRVE6SK1ZX",
  "5c0aa34c3ea19295ad0fd2474c97e54d"
);

const search = instantsearch({
  indexName: "tims_site_articles",
  searchClient,
});

const { searchBox, hits } = instantsearch.widgets;

search.addWidgets([
  searchBox({
    container: "#searchbox",
  }),

  hits({
    container: "#hits",
    templates: {
      item: (hit, { html, components }) => html`
        <div>
          <h2>${components.Highlight({ hit, attribute: "name" })}</h2>
          <p>${components.Highlight({ hit, attribute: "description" })}</p>
        </div>
      `,
    },
  }),

  instantsearch.widgets.index({ indexName: "tims_site_pages" }).addWidgets([
    instantsearch.widgets.hits({
      container: "#hits-secondary",
      templates: {
        item: (hit, { html, components }) => html`
          <div>
            <p>${components.Highlight({ hit, attribute: "name" })}</p>
            <p>${components.Highlight({ hit, attribute: "description" })}</p>
          </div>
        `,
      },
    }),
  ]),
]);

search.start();

// QUESTION / DISCUSSION POINTS
// - are we talking about technical products? - Are we going for production / more generic trends in tech?
// - personalisation > everyone wants it but how do we implement it on the technology side >
// - everyone "wants" visual editing but what they need is proper data for
// - more monolithical applications trends vs. split between partners who do something very well
// - Ask Helene about CMS?
