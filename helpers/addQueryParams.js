export function addParams(obj, id, countriesOrdering) {
    const idsObj = incrementId(Number(id), countriesOrdering)

    const allLinks = {}
    const countryRelativeToLinks = {}
    const countryRelativeToImageLinks = {}
    for (const iterator in obj) {
        const arrOfLinks = obj[iterator]
        const linksWithParams = arrOfLinks.map(link => {
            if (!link.includes("https://beliani.info/newsletter/2022/")) {
                const parsedLink = new URL(link)
                parsedLink.searchParams.set("utm_source", "newsletter")
                parsedLink.searchParams.set("utm_medium", "email")
                parsedLink.searchParams.set("utm_campaign", idsObj[iterator])
                return parsedLink.href
            }

            return link
        })
        countryRelativeToImageLinks[iterator] = linksWithParams.filter(link => link.includes("https://beliani.info/newsletter/2022/"))
        countryRelativeToLinks[iterator] = linksWithParams.filter(link => link.includes("https://www.beliani"))
        allLinks[iterator] = linksWithParams
    }
    return [allLinks, countryRelativeToImageLinks, countryRelativeToLinks, idsObj]
}


function incrementId(id, countriesOrdering) {
    const countries = countriesOrdering ? countriesOrdering : [
        "CHFR",
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
    ]

    const relativeIdToCountires = {}
    
    countries.forEach(country => {
        relativeIdToCountires[country] = id
        id++
    })

    return relativeIdToCountires
}