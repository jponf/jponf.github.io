import waitForElement from '@/utils.js';

import presentation from "./presentation.html"
import './presentation.css'

export default function renderPresentation(container) {
    var template = document.createElement('template');
    template.innerHTML = presentation;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading presentation HTML")
    } else {
        container.appendChild(template.content.childNodes[0]);
        waitForElement("#presentation").then(function() {
            var navbar = document.getElementById("main-navbar");
            var presentation = document.getElementById("presentation");

            // Account for navigation var height
            presentation.style.paddingTop = navbar.offsetHeight + "px";
        });
    }
}