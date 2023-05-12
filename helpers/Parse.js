function getFormula() {
  return `
    const links = {}
    const parsedShopIds = []
    const productsData = {}

    const api = myFetch({
        baseUrl: "https://www.prologistics.info/api/condensedSA",
        options: {
            headers: {
                accept:
                    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "accept-language": "en-US,en;q=0.9,ru;q=0.8",
                "sec-ch-ua":
                    '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"Windows"',
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "none",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
            },
            referrerPolicy: "strict-origin-when-cross-origin",
            body: null,
            method: "GET",
            mode: "cors",
            credentials: "include",
        }
    })

    function myFetch(config) {
        const baseUrl = config.baseUrl
        
        async function get(url) {
            const response = await fetch(baseUrl + url, config.options)
            const data = await response.json()
            return data
        }

        return {
            get
        }
    }

    const ids = ${JSON.stringify(window.productsToParse)}

    function getID(arr, productId) {
        let ids = [];
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

        Object.values(shopId).forEach((elem, index) => {
            arr.forEach(({ shop_id, id }) => {
            if (elem === shop_id) {
                ids.push({
                    country: Object.keys(shopId)[index],
                    id: id,
                });
            }
            });
        });

        ids.push({
            country: "Beliani CH",
            id: String(productId),
        });
        
        return ids;
    }

    function parseLinks() {
        const parsedLinks = {}
        for (const product in links) {
            const linksData = Object.values(links[product]).filter(link => link.length > 0)
                .map(link => new URL(link).origin + new URL(link).pathname)
                .filter(link => link.includes("https://www.beliani."))
                .map(link => link.replace(".desc", ".html"))
        
            linksData.map(link => {
                if (link.includes("https://www.beliani.fr")) {
                    const linkFr = new URL(link)
                    linksData.push("https://www.beliani.ch" + linkFr.pathname)
                }
                return link
            })

            parsedLinks[product] = linksData
        }
        
        return parsedLinks
    }

    function pricesToArray(resultPrices) {
        const result = {};
        for (let index = 0; index < resultPrices.length; index++) {
            for (let name in resultPrices[index]) {
                if (result[name]) {
                    result[name] = [...result[name], ...resultPrices[index][name]];
                } else {
                    result[name] = resultPrices[index][name];
                }
            }
        }
    } 

    for (const product of ids) {
        const response = await api.get(\`/getShops/?id=\${product.id}\`)
        const parsedShopIdsToCountry = getID(response.slaves, product.id)
        parsedShopIds.push({
            relativeCountriesToId: parsedShopIdsToCountry,
            productName: product.name,
        })
        links[product.name] = response.templates[0].preview

        console.log(\`Product \${product.name} with id \${product.id} has been parsed.\`)

        if (parsedShopIds.length === ids.length) {
            console.log(\`All links has been collected. Next step is to get low, high price for every product.\`)

            for (const item of parsedShopIds) {

                for (const object of item.relativeCountriesToId) {
                    let getDataShopIds
                    try {
                        getDataShopIds = await api.get(\`/getSlave/?id=\${object.id}&block=buttons\`)
                    } catch (e) {
                        console.log("An error occurred, i will wait 5 seconds and restart.")
                        let timer = setTimeout(async () => {
                            console.log("Parse product started.")
                            getDataShopIds = await api.get(\`/getSlave/?id=\${object.id}&block=buttons\`)
                            clearTimeout(timer)
                        }, 5000)
                    }
            
                    productsData[item.productName]
                    ?
                    productsData[item.productName] = [
                        ...productsData[item.productName],
                        {
                            country: getDataShopIds.sa.saved_params.username,
                            highPrice: getDataShopIds.sa.saved_params.ShopHPrice,
                            lowPrice: getDataShopIds.sa.saved_params.ShopPrice,
                            differenceBetweenPrices: +getDataShopIds.sa.saved_params.ShopHPrice - +getDataShopIds.sa.saved_params.ShopPrice
                        }
                    ]
                    :
                    productsData[item.productName] = [
                        {
                            country: getDataShopIds.sa.saved_params.username,
                            highPrice: getDataShopIds.sa.saved_params.ShopHPrice,
                            lowPrice: getDataShopIds.sa.saved_params.ShopPrice,
                            differenceBetweenPrices: +getDataShopIds.sa.saved_params.ShopHPrice - +getDataShopIds.sa.saved_params.ShopPrice
                        }
                    ]
            
                }
            }

            console.log(\`Low and high price for every product has been collected.\`)

            const parsedLinks = parseLinks()

            console.log(\`Links has been parsed successfully.\`)

            let seconds = 5
            let timerInterval = setInterval(() => {
                console.log(\`Data willl be printed in \${seconds} seconds.\`)
                seconds--
                if (seconds === 0) {
                    console.log("Links: ", parsedLinks)
                    console.log("Prices: ", productsData)
                    clearInterval(timerInterval)
                }
            }, 1000)
        }
    }
  `
}




window.getFormula = getFormula