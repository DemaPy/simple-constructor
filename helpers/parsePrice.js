import { normalize } from "./normalizePrice.js";

export function parsePrice(pricesData) {
    let prices = {};
    const currencies = {
        euro: "€",
        swissFranc: "Fr.",
        poundSterling: "£",
        hungarianForint: "Ft",
        swedishKrona: "kr",
        danishKrona: "kr.",
        czechKrona: "Kč",
        norwegianKrone: ",-",
    };
    const relativePriceFormat = {
        DE: {
        currency: currencies.euro,
        },
        CHDE: {
        currency: currencies.swissFranc,
        },
        AT: {
        currency: currencies.euro,
        },
        FR: {
        currency: currencies.euro,
        },
        CHFR: {
        currency: currencies.swissFranc,
        },
        IT: {
        currency: currencies.euro,
        },
        UK: {
        currency: currencies.poundSterling,
        },
        ES: {
        currency: currencies.euro,
        },
        PT: {
        currency: currencies.euro,
        },
        PL: {
        currency: "",
        },
        HU: {
        currency: currencies.hungarianForint,
        },
        NL: {
        currency: currencies.euro,
        },
        SE: {
        currency: currencies.swedishKrona,
        },
        DK: {
        currency: currencies.danishKrona,
        },
        CZ: {
        currency: currencies.czechKrona,
        },
        FI: {
        currency: currencies.euro,
        },
        NO: {
        currency: currencies.norwegianKrone,
        },
        SK: {
        currency: currencies.euro,
        },
    };

    const priceFormats = {
        DE: (price) => {
            return normalize(price, "DE") + " " + relativePriceFormat.DE.currency;
        },
        CHDE: (price) => {
            return normalize(price, "CHDE") + " " + relativePriceFormat.CHDE.currency;
        },
        AT: (price) => {
            return normalize(price, "AT") + " " + relativePriceFormat.AT.currency;
        },
        FR: (price) => {
            return normalize(price, "FR") + " " + relativePriceFormat.FR.currency;
        },
        // NOT ACTIVE COUNTRY, FOR CHFR I RENDER CHDE PRICES
        CHFR: (price) => {
            return normalize(price, "CHFR") + " " + relativePriceFormat.CHFR.currency;
        },
        IT: (price) => {
            return normalize(price, "IT") + " " + relativePriceFormat.IT.currency;
        },
        UK: (price) => {
            return relativePriceFormat.UK.currency + normalize(price, "UK");
        },
        ES: (price) => {
            return normalize(price, "ES") + " " + relativePriceFormat.ES.currency;
        },
        PT: (price) => {
            return normalize(price, "PT") + " " + relativePriceFormat.PT.currency;
        },
        PL: (price) => {
            return normalize(price, "PL") + relativePriceFormat.PL.currency;
        },
        HU: (price) => {
            return normalize(price, "HU") + " " + relativePriceFormat.HU.currency;
        },
        NL: (price) => {
            return relativePriceFormat.NL.currency + " " + normalize(price, "NL");
        },
        SE: (price) => {
            return normalize(price, "SE") + " " + relativePriceFormat.SE.currency;
        },
        DK: (price) => {
            return normalize(price, "DK") + " " + relativePriceFormat.DK.currency;
        },
        CZ: (price) => {
            return normalize(price, "CZ") + " " + relativePriceFormat.CZ.currency;
        },
        FI: (price) => {
            return normalize(price, "FI") + " " + relativePriceFormat.FI.currency;
        },
        NO: (price) => {
            return normalize(price, "NO") + relativePriceFormat.NO.currency;
        },
        SK: (price) => {
            return normalize(price, "SK") + " " + relativePriceFormat.SK.currency;
        },
    };

    const shopId = {
        "Beliani DE": "3",
        "Beliani": "1",
        "Beliani AT": "8",
        "Beliani FR": "7",
        "Beliani": "1",
        "Beliani IT": "21",
        "Beliani UK": "2",
        "Beliani SP": "10",
        "Beliani PT": "22",
        "Beliani PL": "12",
        "Beliani HU": "24",
        "Beliani NL": "17",
        "Beliani SE": "23",
        "Beliani DK": "25",
        "Beliani CZ": "26",
        "Beliani FI": "27",
        "Beliani NO": "28",
        "Beliani SK": "29",
    };

    const relativeCountries = {
        "Beliani DE": "DE",
        "Beliani": "CHDE",
        "Beliani AT": "AT",
        "Beliani FR": "FR",
        "Beliani IT": "IT",
        "Beliani UK": "UK",
        "Beliani SP": "ES",
        "Beliani PT": "PT",
        "Beliani PL": "PL",
        "Beliani HU": "HU",
        "Beliani NL": "NL",
        "Beliani SE": "SE",
        "Beliani DK": "DK",
        "Beliani CZ": "CZ",
        "Beliani FI": "FI",
        "Beliani NO": "NO",
        "Beliani SK": "SK",
    };

    function getPriceWithCurrency(country, price) {
        if (price) {
            return priceFormats[relativeCountries[country]](price)
        } else {
            return ""
        }
    }

    for (const productName in pricesData) {
        const productPrices = pricesData[productName]

        for (const iterator of productPrices) {

            Object.keys(shopId).forEach((item) => {
                if (item === iterator.country) {
                    if (prices[relativeCountries[iterator.country]]) {
                        prices[relativeCountries[iterator.country]] = [
                            ...prices[relativeCountries[iterator.country]],
                            productName,
                            getPriceWithCurrency(iterator.country, iterator.lowPrice),
                            getPriceWithCurrency(iterator.country, iterator.highPrice),
                        ];
                    } else {
                        prices[relativeCountries[iterator.country]] = [
                            productName,
                            getPriceWithCurrency(iterator.country, iterator.lowPrice),
                            getPriceWithCurrency(iterator.country, iterator.highPrice),
                        ];
                    }
                }
            });

        }

    }


    return prices;
}