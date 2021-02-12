import about from "./about.html"
import './about.css'

export default function createAboutMe() {
    var template = document.createElement('template')
    template.innerHTML = about;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading presentation HTML")
    }

    return template.content.childNodes[0];
}
