






export async function getCss(type) {
    if (type === "newsletter") {
        return await fetch(`http://127.0.0.1:5501/assets/${type}.css`).then(data => data.text())
    }

    if (type === "landing") {
        return await fetch(`http://127.0.0.1:5501/assets/${type}.css`).then(data => data.text())
    }
}