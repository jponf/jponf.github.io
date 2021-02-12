import about from "./about.html"
import './about.css'

export default function renderAboutMe(container) {
    var template = document.createElement('template');
    template.innerHTML = about;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading aboutme HTML")
    } else {
        container.appendChild(template.content.childNodes[0]);
    }
}
