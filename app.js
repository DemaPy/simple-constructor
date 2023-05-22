import { initApp } from "./main/initApp.js";
import { newsletter, landing, errorPage } from "./templates/index.js";


initApp(
    {
        renderTo: "#app",
        startId: "15902",
        countries: [
            "CHDE",
            "UK",
            "DE",
            "FR",
            "AT",
            "ES",
            "PL",
            "NL",
            "PT",
            "IT",
            "SE",
            "HU",
            "DK",
            "CZ",
            "FI",
            "NO",
            "SK",
            "CHFR",
        ]
    },
    {
        newsletter,
        landing,
        errorPage
    },
)