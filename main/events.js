
import { getCss } from "../helpers/getCss.js";
import { getFormula } from "../helpers/Parse.js";


let canMakeRequest = true
function inputBlur(e, productsToParse) {
    const value = e.target.value
    if (canMakeRequest) {
        canMakeRequest = false
        let timer = setTimeout(() => {
            if (value.trim()) {
                canMakeRequest = true
                productsToParse.value = value
                products.value = "Products saved"
                let timer2 = setTimeout(() => {
                    products.value = ""
                    clearTimeout(timer2)
                }, 2000)
                clearTimeout(timer)
                return
            }
            clearTimeout(timer)
        }, 3000)
    }
}


function copyHandlerTemplate(e, copyTemplate, app, renderTemplate) {
    if (renderTemplate.value === "newsletter") {
        navigator.clipboard.writeText(app.innerHTML)
        copyTemplate.textContent = "Copied to clipboard"
        let id = setTimeout(() => {
            copyTemplate.textContent = "Copy template"
            clearInterval(id)
        }, 2000)
    } else {
        Promise.resolve().then(() => getCss())
        .then((css) => {
            navigator.clipboard.writeText(`<style>${css}</style>` + app.innerHTML)
            copyTemplate.textContent = "Copied to clipboard"
            let id = setTimeout(() => {
                copyTemplate.textContent = "Copy template"
                clearInterval(id)
            }, 2000)
        })
    }
}



function copyHandlerFormula(e, copyFormula, productsToParse) {
    if (productsToParse.value) {
        navigator.clipboard.writeText(getFormula(productsToParse.value))
        copyFormula.textContent = "Copied to clipboard"
    } else {
        copyFormula.textContent = "Please set products"
    }

    let id = setTimeout(() => {
        copyFormula.textContent = "Copy formula"
        clearInterval(id)
    }, 2000)
}


function clickRenderBtnHandler(e, renderTemplate, render) {
    if (e.target.textContent === "Render landing") {
        renderTemplate.value = "landing"
        e.target.textContent = "Render newsletter"
        render()
        return
    }
    
    if (e.target.textContent === "Render newsletter") {
        renderTemplate.value = "newsletter"
        e.target.textContent = "Render landing"
        render()
        return
    }
}



function openCampaignHandler(e, id) {
    window.open("https://www.prologistics.info/news_email.php?id=" + id, "blank")
}


export {
    inputBlur,
    copyHandlerTemplate,
    copyHandlerFormula,
    clickRenderBtnHandler,
    openCampaignHandler
}