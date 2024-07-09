const searchClient = algoliasearch(
  "MRVE6SK1ZX",
  "5c0aa34c3ea19295ad0fd2474c97e54d"
);

const search = instantsearch({
  indexName: "tims_site_articles",
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: "#searchbox",
  }),

  instantsearch.widgets.hits({
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
]);

search.start();
