// Bootstrap styles and js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import createNavBar from './components/navbar/navbar.js';
import createPresentation from './components/presentation/presentation.js';
import createAboutMe from './components/about/about.js';
import "./index.scss";


function createComponents() {
    var mainContainer = document.getElementById("main-container");
    mainContainer.appendChild(createNavBar());
    mainContainer.appendChild(createPresentation());
    mainContainer.appendChild(createAboutMe());
}

// <a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a>
// https://visme.co/blog/website-color-schemes/
createComponents()
