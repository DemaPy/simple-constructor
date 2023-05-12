export function addParams(obj, id) {
    const idsObj = incrementId(Number(id))

    const objNew = {}
    for (const iterator in obj) {
        const arrOfLinks = obj[iterator]
        const linksWithParams = arrOfLinks.map(link => link + "?utm_source=newsletter&utm_medium=email&utm_campaign=" + idsObj[iterator])
        objNew[iterator] = linksWithParams
    }
    return [objNew, idsObj]
}


function incrementId(id) {
    const countries = [
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