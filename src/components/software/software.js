import waitForElement from '@/utils.js';

// import skillsHTML from './skills.html';
import cardHBS from './card.hbs';
import './software.css';

let LANG_COLOR = {
    "C": "#EA80FC",
    "C++": "#f34b7d",
    "Java": "#b07219",
    "Python": "#8C9EFF",
}


export function setUpSoftware() {
    // software
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
            url: "https://ulog.udl.cat/?page_id=30"
        },
        {
            name: "OptiLog",
            about: "A Framework for SAT-based Systems.",
            languages: ["C++", "C", "Python"],
            url: "https://ulog.udl.cat/?page_id=30"
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

    waitForElement("#software-deck").then(function() {
        let softwareDeck = document.getElementById("software-deck");
        for (var x of software) {
            let languages = x.languages.map(
                value => {
                    return {name: value,
                            color: LANG_COLOR[value]}
                });
            let cardTemplate = document.createElement('template');

            cardTemplate.innerHTML = cardHBS({
                title: x.name,
                about: x.about,
                url: x.url,
                languages: languages,
            });

            softwareDeck.appendChild(cardTemplate.content.childNodes[0]);
        }
    });
}