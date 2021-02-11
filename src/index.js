import 'bootstrap/dist/css/bootstrap.min.css';
import createNavBar from './components/navbar/navbar.js';
import createPresentation from './components/presentation/presentation.js';
// import "./index.css";


function createComponents() {
    var mainContainer = document.getElementById("main-container");
    mainContainer.appendChild(createNavBar());
    mainContainer.appendChild(createPresentation());
}

// <a href="https://www.vecteezy.com/free-vector/vector">Vector Vectors by Vecteezy</a>
// https://visme.co/blog/website-color-schemes/
createComponents()
