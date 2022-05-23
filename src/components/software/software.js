import waitForElement from '@/utils.js';

// import skillsHTML from './skills.html';
import softwareCardHBS from './software-card.hbs';
import webappCardHBS from './webapp-card.hbs'
import './software.css';

let LANG_COLOR = {
    "C": "#EA80FC",
    "C++": "#f34b7d",
    "Java": "#b07219",
    "Python": "#8C9EFF",
}

export function setUpSoftware() {
    setUpSoftwareList();
    setUpWebAppsList();
}

function setUpSoftwareList() {
    let software = [
        {
            name: "pyrl",
            about: "Deep reinforcement learning agents implemented with Python.",
            languages: ["Python"],
            url: "https://github.com/jponf/pyrl"
        },
        {
            name: "PyDGGA",
            about: "Distributed GGA for automatic configuration.",
            languages: ["Python"],
            url: "https://ulog.udl.cat/software"
        },
        {
            name: "OptiLog",
            about: "A Framework for SAT-based Systems.",
            languages: ["C++", "C", "Python"],
            url: "https://pypi.org/project/optilog/"
        },
        {
            name: "Neural Style Transfer",
            about: "Pytorch implementation of the paper \"A Neural Algorithm of Artistic Style\".",
            languages: ["Python"],
            url: "https://github.com/jponf/neural-style-transfer"
        },
        {
            name: "jrlisp",
            about: "Mini-list implementation. Programming contest in memory of Josep Mª Ribó Balust. ",
            languages: ["Java"],
            url: "https://github.com/jponf/jrlisp"
        }
    ]

    waitForElement("#software-deck").then(function () {
        let softwareDeck = document.getElementById("software-deck");
        for (var x of software) {
            let languages = x.languages.map(
                value => {
                    return {
                        name: value,
                        color: LANG_COLOR[value]
                    }
                });
            let cardTemplate = document.createElement('template');

            cardTemplate.innerHTML = softwareCardHBS({
                title: x.name,
                about: x.about,
                url: x.url,
                languages: languages,
            });

            softwareDeck.appendChild(cardTemplate.content.childNodes[0]);
        }
    });
}

function setUpWebAppsList() {
    let webapps = [
        {
            title: "Paraulògic-Solver",
            about: "A solver for the paraulògic game (catalan spelling bee).",
            links: [
                { href: "https://github.com/jponf/paraulogic-solver", text: "Repository" },
                { href: "https://vilaweb.cat/paraulogic/", text: "Original Game WebApp" }
            ],
            url: "https://jponf.github.io/paraulogic-solver/"
        }
    ]

    waitForElement("#webapps-deck").then(function () {
        let webappsDeck = document.getElementById("webapps-deck");
        for (var x of webapps) {
            let cardTemplate = document.createElement('template');

            cardTemplate.innerHTML = webappCardHBS(x);
            webappsDeck.appendChild(cardTemplate.content.childNodes[0]);
        }
    });
}
