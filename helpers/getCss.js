






export async function getCss() {
    const response = await fetch("http://127.0.0.1:5501/assets/template.css").then(data => data.text())
    return response
}