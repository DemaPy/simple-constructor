<tr>
    <td align="center" style="background-color: #e6eaed; padding-top: 20px; padding-bottom: 20px;" class="newsletterContainer">
        <iframe id="newsletterIFrame" class="newsletterIFrame" src="https://www.youtube.com/embed/fgMCRXieDfw?enablejsapi=1&amp;mute=1&amp;playlist=fgMCRXieDfw&amp;loop=1" width="650" height="400" frameborder="0" allow="autoplay" allowfullscreen=""></iframe>
    </td>
</tr>

// Id of iframe in selectors
const selectorss = ["newsletterIFrame"]

function onYouTubeIframeAPIReady() {
    selectorss.forEach(selector => {
        new YT.Player(selector, {
            events: {
                'onReady': saveEvent,
            }
        })
    })
}

let eventOnReady = {}
function saveEvent(event) {
    eventOnReady[event.target.h.id] = event.target
}

function mountIntersectionMobile() {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function play(id) {
    eventOnReady[id].playVideo()
}

function handleIntersectingMobile(elements, observer) {
    elements.forEach(item => {
        if (item.isIntersecting) {
            play(item.target.id)
        }
    })
}

const observerMobile = new IntersectionObserver(handleIntersectingMobile)
window.onload = () => {
    selectorss.forEach(frame => observerMobile.observe(document.querySelector("#" + frame)))
}
mountIntersectionMobile(selectorss)