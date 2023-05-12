import { addParams } from "./addQueryParams.js";
import { links, text, prices, codes } from "../data/index.js";
import { parsePrice } from "./parsePrice.js";

export function initApp({ renderTo, startId }, template) {

    let country = "de".toUpperCase()
    let renderTemplate = "newsletter"
    const root = document.querySelector(renderTo);
    const [linksWithTrackingLinkAndId, countriesAndId] = addParams(links, startId)

    if (country in links && country in text) {
        setEvents()
        return {
            render,
        }
    } else {
      alert("Invalid country.");
    }

    function render() {
        if (root) {
            if (renderTemplate === "newsletter") {
                root.innerHTML = renderNewsletter()
            }

            if ( renderTemplate === "landing") {
                root.innerHTML = renderLanding()
            }
        } else {
          alert("Please check '' renderTo '' configuration.");
        }
    }

    function renderNewsletter() {
        return template.newsletter(
            {
                link: linksWithTrackingLinkAndId[country],
                differencePrices: prices,
                prices: country === "CHFR" ? parsePrice(prices)["CHDE"] : parsePrice(prices)[country],
                text:  text[country].map((t) => t.replaceAll("\n", "<br />")),
                country,
                countriesAndId
            }
        )
    }

    function renderLanding() {
        return template.landing(
            {
                link: links[country],
                differencePrices: prices,
                prices: country === "CHFR" ? parsePrice(prices)["CHDE"] : parsePrice(prices)[country],
                text:  text[country].map((t) => t.replaceAll("\n", "<br />")),
                code: codes[country],
                country,
                countriesAndId
            }
        )
    }

    function setEvents() {
        const app = document.querySelector("#app")

        const copyTemplate = document.querySelector(".copyTemplate")
        const copyFormula = document.querySelector(".copyFormula")
        const first = document.querySelector("#first")
        const second = document.querySelector("#second")
        const openCampaign = document.querySelector(".openCampaign")
        const renderTemplateBtn = document.querySelector(".renderTemplate")
        const sync = syncHash(first.children, second.children, render)

        window.addEventListener('load', () => sync())
        window.addEventListener("popstate", () => sync());
    
        first.addEventListener('click', (e) => {
            first.childNodes.forEach(node => setCountry(node, e.target, sync))
        })
    
        second.addEventListener('click', (e) => {
            second.childNodes.forEach(node => setCountry(node, e.target, sync))
        })

        copyTemplate.addEventListener("click", () => {
            navigator.clipboard.writeText(app.innerHTML)
            copyTemplate.textContent = "Copied to clipboard"
            let id = setTimeout(() => {
                copyTemplate.textContent = "Copy template"
                clearInterval(id)
            }, 2000)
        })

        copyFormula.addEventListener("click", () => {
            navigator.clipboard.writeText(window.getFormula())
            copyFormula.textContent = "Copied to clipboard"
            let id = setTimeout(() => {
                copyFormula.textContent = "Copy formula"
                clearInterval(id)
            }, 2000)
        })

        renderTemplateBtn.addEventListener('click', (e) => {
            if (e.target.textContent === "Render landing") {
                renderTemplate = "landing"
                e.target.textContent = "Render newsletter"
                render()
                return
            }
            
            if (e.target.textContent === "Render newsletter") {
                renderTemplate = "newsletter"
                e.target.textContent = "Render landing"
                render()
                return
            }

        })

        openCampaign.addEventListener('click', () => window.open("https://www.prologistics.info/news_email.php?id=" + countriesAndId[country], "blank"))
    }
        
    function setCountry(node, target, sync) {
        if (node === target) {
            const selectedCountry = target.attributes.value.value
            window.location.hash = selectedCountry
            country = selectedCountry
            sync()
        }
    }

    function syncHash(first, second, render) {
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
            setActive(second)
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
}