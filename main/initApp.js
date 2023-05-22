import { addParams } from "../helpers/addQueryParams.js";
import { parsePrice } from "../helpers/parsePrice.js";
import { links, text, prices, codes, free, conditions } from "../data/index.js";
import { clickRenderBtnHandler, copyHandlerFormula, copyHandlerTemplate, inputBlur, openCampaignHandler } from "./events.js";

export function initApp({ renderTo, startId, countries }, templates) {

    let country = "de".toUpperCase()
    let renderTemplate = {
        value: "newsletter"
    }
    let productsToParse = {
        value: null
    }
    const root = document.querySelector(renderTo);
    const [linksWithTrackingLinkAndId, countriesAndId] = addParams(links, startId, countries)

    if (country in links && country in text) {
        setEvents()
    } else {
      alert("Invalid country.");
    }

    function render() {
        if (root) {
            if (hasUndefined(selectTemplateToRender(renderTemplate.value))) {
                if (confirm("HTML code has undefined value. Do you want to render it?")) {
                    return root.innerHTML = selectTemplateToRender(renderTemplate.value)
                }

                return root.innerHTML = templates.errorPage('Error rendering. Please check your HTML code and try again.')
            } else {
                root.innerHTML = selectTemplateToRender(renderTemplate.value)
            }
        } else {
          alert("Please check '' renderTo '' configuration.");
        }
    }

    function setEvents() {
        const app = document.querySelector("#app")

        const first = document.querySelector("#first")
        const products = document.querySelector("#products")
        const copyFormula = document.querySelector(".copyFormula")
        const copyTemplate = document.querySelector(".copyTemplate")
        const openCampaign = document.querySelector(".openCampaign")
        const renderTemplateBtn = document.querySelector(".renderTemplate")
        const sync = syncHash(first.children, render)

        window.addEventListener('load', () => sync())
        window.addEventListener("popstate", () => sync());

        products.addEventListener('blur', (e) => inputBlur(e, productsToParse))
        renderTemplateBtn.addEventListener('click', (e) => clickRenderBtnHandler(e, renderTemplate, render))
        copyTemplate.addEventListener("click", (e) => copyHandlerTemplate(e, copyTemplate, app, renderTemplate))
        openCampaign.addEventListener('click', (e) => openCampaignHandler(e, countriesAndId[country]))
        copyFormula.addEventListener("click", (e) => copyHandlerFormula(e, copyFormula, productsToParse))
        first.addEventListener('click', (e) => first.childNodes.forEach(node => setCountry(node, e.target, sync)))
    }
        
    function setCountry(node, target, sync) {
        if (node === target) {
            const selectedCountry = target.attributes.value.value
            window.location.hash = selectedCountry
            country = selectedCountry
            sync()
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

        Array.from(children).forEach(node => {
            if (countryHash === node.attributes.value.value) {
                return node.classList.add("active")
            }
            node.classList.remove("active")
        })
    }

    function selectTemplateToRender(template) {
        if (template in templates) {
            return templates[template](
                {
                    free: free[country],
                    links: links[country],
                    id: countriesAndId[country],
                    conditions: conditions[country],
                    trackingLinks: linksWithTrackingLinkAndId[country],
                    text:  text[country].map((t) => t.replaceAll("\n", "<br />")),
                    prices: country === "CHFR" ? parsePrice(prices)["CHDE"] : parsePrice(prices)[country],
                    differencePrices: prices,
                    country,
                    code: codes[country]
                }
            )
        } else {
            return templates.errorPage()
        }
    }

    function hasUndefined(template) {
        return template.includes("undefined")
    }
}
