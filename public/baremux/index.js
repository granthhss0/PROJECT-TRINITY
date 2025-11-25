// public/baremux/index.js
(() => {
  const workerUrl = "https://cdn.jsdelivr.net/npm/@mercuryworkshop/bare-mux/dist/worker.js";

  // Hard-wired Wisp server (your Render service)
  const wisp = "wss://wisp.mercurywork.shop/wisp/";

  // Prefer WISP; Epoxy is just a fallback path on the same host (can 404, that's fine)
  const clients = [
    { name: "wisp",  type: "wisp",  endpoint: wisp },
    { name: "epoxy", type: "epoxy", endpoint: "/epoxy/" },
  ];

  self.__BAREMUX_CONFIG__ = { workerUrl, clients };
})();
