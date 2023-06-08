






export async function getCss(type) {
    if (type === "newsletter") {
        return await fetch(`http://127.0.0.1:5501/assets/${type}.css`).then(data => data.text())
    }

    if (type === "landing") {
        return await fetch(`http://127.0.0.1:5501/assets/${type}.css`).then(data => data.text())
    }
}

export function attachCss({value}) {
    if (value === "newsletter") {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = `./assets/${value}.css`
        link.id = `newsletterCss`
        document.querySelector("#landingCss")?.remove()

        document.querySelector('head').append(link)

    }

    if (value === "landing") {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = `./assets/${value}.css`
        link.id = `landingCss`
        document.querySelector("#newsletterCss")?.remove()

        document.querySelector('head').append(link)

    }

}