// Bootstrap styles and js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import renderNavBar from './components/navbar/navbar.js';
import renderPresentation from './components/presentation/presentation.js';
import renderAboutMe from './components/about/about.js';
import "./index.scss";


function createComponents() {
    var mainContainer = document.getElementById("main-container");
    renderNavBar(mainContainer);
    renderPresentation(mainContainer);
    renderAboutMe(mainContainer);
}

// <a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a>
// https://visme.co/blog/website-color-schemes/
createComponents()
