import presentation from "./presentation.html"
import './presentation.css'

export default function createPresentation() {
    var template = document.createElement('template')
    template.innerHTML = presentation;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading presentation HTML")
    }

    return template.content.childNodes[0];
}