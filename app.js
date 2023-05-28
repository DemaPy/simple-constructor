import { initApp } from "./main/initApp.js";
import { newsletter, landing, errorPage } from "./templates/index.js";

initApp(
  {
    renderTo: "#app",
    startId: "16092",
    xlsPath: "./data/xls/",
    productsOrdering: [
      'WALTON',
      'ARCOLA',
      'MAGALIA',
      'BROOKVILLE',
    ]
  },
  {
    newsletter,
    landing,
    errorPage,
  }
);
