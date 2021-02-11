import navbar from "./navbar.html";
import "./navbar.css";

export default function createNavBar() {
    var template = document.createElement('template')
    template.innerHTML = navbar;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading presentation HTML")
    }

    return template.content.childNodes[0];
}