import { normalize } from './normalizePrice.js';
import { priceFormats  } from './priceFormats.js'


export function parsePrice(pricesData, type) {
  let prices = {};

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

  const shopId = {
    "Beliani DE": "3",
    'Beliani': "1",
    "Beliani AT": "8",
    "Beliani FR": "7",
    'Beliani': "1",
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

  function getPriceWithCurrency(country, price) {
    if (price) {
      if (type === "formattedWithCurrency") {
        return priceFormats[relativeCountries[country]](price);
      }

      if (type === "formatted") {
        return normalize(price, relativeCountries[country])
      }
    } else {
      return "";
    }
  }

  for (const productName in pricesData) {
    const productPrices = pricesData[productName];

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

