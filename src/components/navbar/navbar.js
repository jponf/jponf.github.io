import navbar from "./navbar.html";
import "./navbar.css";

var last_scroll_top = 0;


export default function renderNavBar(container) {
    var template = document.createElement('template');
    template.innerHTML = navbar;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading navbar HTML")
    } else {
        container.appendChild(template.content.childNodes[0]);
    }

    window.addEventListener("scroll",
        function() {
            var scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                var navbar = document.getElementById("main-navbar")
                navbar.classList.remove("navbar-scroll-down")
                navbar.classList.add("navbar-scroll-up")
            } else {
                var navbar = document.getElementById("main-navbar")
                navbar.classList.remove("navbar-scroll-up")
                navbar.classList.add("navbar-scroll-down")
            }
            last_scroll_top = scroll_top;
        }
    )

}