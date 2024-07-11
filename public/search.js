const searchClient = algoliasearch(
  "MRVE6SK1ZX",
  "5c0aa34c3ea19295ad0fd2474c97e54d"
);

const search = instantsearch({
  indexName: "tims_site_pages",
  searchClient,
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
    placholder: "Search",
  }),

  hits({
    container: "#hits-pages",
    templates: {
      item: (hit, { html, components }) => html`
        <a
          href="${hit.url}"
          class="md:flex md:flex-row md:space-x-4"
          id="${hit.objectID}"
        >
          <img
            src="${hit.image}"
            alt="${hit.title}"
            width="350"
            height="197"
            loading="lazy"
            class="mb-2 fancy-image w-full md:w-64"
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
          <a
            href="${hit.url}"
            class="md:flex md:flex-row md:space-x-4"
            id="${hit.objectID}"
          >
            <img
              src="${parseImage(hit.image)}"
              alt="${hit.headline}"
              width="350"
              height="197"
              loading="lazy"
              class="mb-2 fancy-image w-full md:w-64"
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
]);

search.start();
