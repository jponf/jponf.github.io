// Bootstrap styles and js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

import Handlebars from 'handlebars/runtime';

import renderNavBar from './components/navbar/navbar.js';
import renderPresentation from './components/presentation/presentation.js';
import renderAboutMe from './components/about/about.js';
import renderSkills from './components/skills/skills.js';
import renderPublications from './components/publications/publications.js';
import renderContactMe from './components/contact/contact.js';

import "./index.scss";

// Initialize handlebars helpers

Handlebars.registerHelper("mul", function(...values) {
    // Last argument is the options object
    // var options = values[values.length - 1];

    var result = 1;
    for (var i = 0; i < values.length - 1; ++i) {
        result *= values[i]
    }
    return result
});


// Create content

function createComponents() {
    var mainContainer = document.getElementById("main-container");
    renderNavBar(mainContainer);
    renderPresentation(mainContainer);
    renderAboutMe(mainContainer);
    renderSkills(mainContainer);
    renderPublications(mainContainer);
    renderContactMe(mainContainer);
}

// <a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a>
// https://visme.co/blog/website-color-schemes/
createComponents();
