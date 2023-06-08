import { initApp } from "./main/initApp.js";
import { newsletter, landing, errorPage } from "./templates/index.js";

initApp(
  {
    renderTo: "#app",
    startId: "16125",
  },
  {
    newsletter,
    landing,
    errorPage,
  }
);
