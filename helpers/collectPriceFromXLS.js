function parseExcel(file) {
  var reader = new FileReader();

  function read() {
    reader.readAsBinaryString(file);

    return new Promise((resolve, reject) => {
      reader.addEventListener("load", (ev) => {
        const data = ev.target.result;
        const workbook = XLSX.read(data, {
          type: "binary",
        });

        for (const key in workbook.SheetNames) {
          const sheetName = workbook.SheetNames[key];
          resolve(
            XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])
          );
        }
      });
    });
  }

  return read();
}

function createModel(data) {
  const relativeCountries = {
    "https://www.beliani.ch": "CHDE",
    "https://www.beliani.ch": "CHFR",
    "https://www.beliani.co.uk": "UK",
    "https://www.beliani.de": "DE",
    "https://www.beliani.fr": "FR",
    "https://www.beliani.at": "AT",
    "https://www.beliani.es": "ES",
    "https://www.beliani.pl": "PL",
    "https://www.beliani.nl": "NL",
    "https://www.beliani.pt": "PT",
    "https://www.beliani.it": "IT",
    "https://www.beliani.se": "SE",
    "https://www.beliani.hu": "HU",
    "https://www.beliani.dk": "DK",
    "https://www.beliani.cz": "CZ",
    "https://www.beliani.fi": "FI",
    "https://www.beliani.no": "NO",
    "https://www.beliani.sk": "SK",
  };
  let arrOfProductNameAndPrices = {};

  for (const key in data) {
    const product = data[key];
    const link = new URL(product["Landing Page URL"]);
    const country = relativeCountries[link.origin];
    if (arrOfProductNameAndPrices[country]) {
      arrOfProductNameAndPrices[country] = [
        ...arrOfProductNameAndPrices[country],
        product["name"],
        product["Newsletter_Price_Low"],
        product["Newsletter_Price_High"],
      ];
    } else {
      arrOfProductNameAndPrices[country] = [
        product["name"],
        product["Newsletter_Price_Low"],
        product["Newsletter_Price_High"],
      ];
    }
  }

  return arrOfProductNameAndPrices;
}

function sort(data, productsOrdering) {
  const products = [];
  productsOrdering.forEach((productName) => {
    data.forEach((dataItem) => {
      if (dataItem["SA Name"] === productName || dataItem["Offer Name"].includes(productName)) {
        products.push({
          ...dataItem,
          name: productName,
        });
      }
    });
  });
  return products;
}

export async function getPriceFromXLS(country, productsOrdering, xlsPath) {

  const result = await fetch(xlsPath + `${country?.toLowerCase()}.xls`)
        .then((data) => {
          if (data.ok) {
            return data.blob()
          }
          throw new Error("File with name: " + country + ".xls not found")
        })
        .then((r) => parseExcel(r))
        .then((r) => {
          if (productsOrdering) {
            return sort(r, productsOrdering)
          }
          throw new Error("Please set productsOrdering in app.js \n <div><h3 style='display: inline;'>Example: productsOrdering: [productName, productName]</h3>")
        })
        .then((json) => {
          if (json.length) {
            return createModel(json)
          }
          throw new Error(`Please check name of products in productsOrdering ${productsOrdering}. \n <div><h3 style='display: inline;'>Do you have this products in project?</h3></div>`)
        })
        .catch(err => {
          Toastify({
            text: err,
            escapeMarkup: false,
            duration: 3000
          }).showToast();
          return {}
        })
  return result
}
