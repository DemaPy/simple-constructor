import { addParams } from "../helpers/addQueryParams.js";
import { parsePrice } from "../helpers/parsePrice.js";
import { links, text, prices, codes, free, conditions, save } from "../data/index.js";
import { clickRenderBtnHandler, copyHandlerFormula, copyHandlerTemplate, inputBlur, openCampaignHandler, openEveryHandler } from "./events.js";
import { getPriceFromXLS } from "../helpers/collectPriceFromXLS.js";
import { attachCss } from "../helpers/getCss.js";

export function initApp({ renderTo, startId, countries, productsOrdering, xlsPath }, templates) {

    let country = "de".toUpperCase()
    let renderTemplate = {
        value: "newsletter"
    }
    let productsToParse = {
        value: null
    }

    const root = document.querySelector(renderTo);
    const [allLinks, countryRelativeToImageLinks, countryRelativeToLinks, countriesAndId] = addParams(links, startId, countries)

    if (country in links && country in text) {
        setEvents()
    } else {
        Toastify({
            text: "Invalid country.",
            escapeMarkup: false,
            duration: 3000
        }).showToast();
    }

    function render() {
        if (root) {
            attachCss(renderTemplate)
            selectTemplateToRender(renderTemplate.value).then(template => {
                if (hasUndefined(template)) {
                    if (confirm("Do you want to render template with undefined value?")) {
                        return root.innerHTML = template
                    }
                    return root.innerHTML = templates.errorPage('Error rendering. HTML code has undefined value.')
                }

                root.innerHTML = template
            })
        } else {
          alert("Please check '' renderTo '' configuration.");
        }
    }

    function setEvents() {
        const app = document.querySelector("#app")

        const first = document.querySelector("#first")
        const firstChildNodes = Array.from(document.querySelector("#first").children)
        const products = document.querySelector("#products")
        const copyFormula = document.querySelector(".copyFormula")
        const openEvery = document.querySelector(".openEvery")
        const copyTemplate = document.querySelector(".copyTemplate")
        const openCampaign = document.querySelector(".openCampaign")
        const renderTemplateBtn = document.querySelector(".renderTemplate")
        const sync = syncHash(firstChildNodes, render)

        window.addEventListener('load', () => sync())
        window.addEventListener("popstate", () => sync());

        products.addEventListener('blur', (e) => inputBlur(e, productsToParse))
        openEvery.addEventListener('click', (e) => openEveryHandler(firstChildNodes))
        openCampaign.addEventListener('click', (e) => openCampaignHandler(e, countriesAndId[country]))
        copyFormula.addEventListener("click", (e) => copyHandlerFormula(e, copyFormula, productsToParse))
        first.addEventListener('click', (e) => firstChildNodes.forEach(node => setCountry(node, e.target)))
        renderTemplateBtn.addEventListener('click', (e) => clickRenderBtnHandler(e, renderTemplate, render))
        copyTemplate.addEventListener("click", (e) => copyHandlerTemplate(e, copyTemplate, app, renderTemplate))
    }
        
    function setCountry(node, target) {
        if (node === target) {
            const selectedCountry = target.attributes.value.value
            window.location.hash = selectedCountry
            country = selectedCountry
        }
    }

    function syncHash(first, render) {
        const acceptedLocationHash = [
            "DE",
            "CHDE",
            "AT",
            "FR",
            "CHFR",
            "IT",
            "UK",
            "ES",
            "PT",
            "PL",
            "HU",
            "NL",
            "SE",
            "DK",
            "CZ",
            "FI",
            "NO",
            "SK",
        ]
        const defaultCountry = "DE"
        return () => {
            country = window.location.hash.replace("#", "").toUpperCase()
            if (!acceptedLocationHash.includes(country)) {
                country = defaultCountry
                window.location.hash = defaultCountry
            }

            setActive(first)
            render()
        }
    }

    function setActive(children) {
        const countryHash = window.location.hash.replace("#", "").toUpperCase()

        children.forEach(node => {
            if (countryHash === node.attributes.value.value) {
                return node.classList.add("active")
            }
            node.classList.remove("active")
        })
    }

    function selectTemplateToRender(template) {
        if (template in templates) {
            if (xlsPath) {
                return new Promise((resolve, reject) => {
                    resolve(getPriceFromXLS(country, productsOrdering, xlsPath))
                })
                .then((pricesXLS) => {
                    if (country in pricesXLS) {
                        return templates[template]({
                            free: free[country],
                            links: links[country],
                            allLinks: allLinks[country],
                            images: countryRelativeToImageLinks[country],
                            trackingLinks: countryRelativeToLinks[country],
                            save: save[country],
        
                            id: countriesAndId[country],
                            conditions: conditions[country],

                            pricesXLS: pricesXLS[country],
                            prices: country === "CHFR" ? parsePrice(prices, "formatted")["CHDE"] : parsePrice(prices, "formatted")[country],
                            formatPrices: country === "CHFR" ? parsePrice(prices, "formattedWithCurrency")["CHDE"] : parsePrice(prices, "formattedWithCurrency")[country],
        
                            text:  text[country].map((t) => t.replaceAll("\n", "<br />")),
                            code: codes[country],
                            country,
                        })
                    }

                    return templates.errorPage("Please check xls file that you render. <br /> Name of xls file should be the same as country. <br /> Ensure that you exported country PL and xls file has the same name pl.xls .")
                })
            } else {
                return new Promise((resolve, reject) => {
                    resolve(
                        templates[template]({
                                free: free[country],
                                links: links[country],
                                allLinks: allLinks[country],
                                images: countryRelativeToImageLinks[country],
                                trackingLinks: countryRelativeToLinks[country],
                                save: save[country],
            
                                id: countriesAndId[country],
                                conditions: conditions[country],

                                prices: country === "CHFR" ? parsePrice(prices, "formatted")["CHDE"] : parsePrice(prices, "formatted")[country],
                                formatPrices: country === "CHFR" ? parsePrice(prices, "formattedWithCurrency")["CHDE"] : parsePrice(prices, "formattedWithCurrency")[country],
            
                                text:  text[country].map((t) => t.replaceAll("\n", "<br />")),
                                code: codes[country],
                                country,
                            })
                    )
                })
            }
        } else {
            return templates.errorPage("Please check template that you passed in app.js" + JSON.stringify(templates))
        }
    }

    function hasUndefined(template) {
        return template.includes("undefined")
    }
}
