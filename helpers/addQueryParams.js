export function addParams(obj, id, countriesOrdering) {
    const idsObj = incrementId(Number(id), countriesOrdering)

    const objNew = {}
    for (const iterator in obj) {
        const arrOfLinks = obj[iterator]
        const linksWithParams = arrOfLinks.map(link => link + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + idsObj[iterator])
        objNew[iterator] = linksWithParams
    }
    return [objNew, idsObj]
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