// Bootstrap styles and js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import '@fortawesome/fontawesome-free/css/brands.min.css';
// import '@fortawesome/fontawesome-free/js/brands.min.js';
// import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faGithub, faLinkedin, faTwitter)

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
    // import('@fortawesome/fontawesome-free/css/brands.min.css');
    // import('@fortawesome/fontawesome-free/js/brands.min.js');
    // import('@fortawesome/fontawesome-free/css/fontawesome.min.css');
    // import('@fortawesome/fontawesome-free/js/fontawesome.min.js');

    var mainContainer = document.getElementById("main-container");
    renderNavBar(mainContainer);
    renderPresentation(mainContainer);
    renderAboutMe(mainContainer);
    renderSkills(mainContainer);
    renderPublications(mainContainer);
    renderContactMe(mainContainer);
}

createComponents();
