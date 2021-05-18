import waitForElement from '@/utils.js';

// import skillsHTML from './skills.html';
import cardHBS from './card.hbs';
import './skills.css';


// export function renderSkills(container) {
//     var template = document.createElement('template');
//     template.innerHTML = skillsHTML;

//     if (template.content.childNodes.length != 1) {
//         document.write("Error loading aboutme HTML")
//     } else {
//         container.appendChild(template.content.childNodes[0]);
//         setUpSkills();
//     }
// }


export function setUpSkills() {
    // technology skills
    var techSkills = [
        {
            name: "Tensorflow",
            img: "tf.png",
            level: 9
        },
        {
            name: "PyTorch",
            img: "pytorch.png",
            level: 9
        },
        {
            name: "Scikit Learn",
            img: "sklearn.png",
            level: 9
        },
        {
            name: "Docker",
            img: "docker.png",
            level: 8
        },
        {
            name: "Google Cloud",
            img: "gcp.png",
            level: 7
        },
        {
            name: "Latex",
            img: "latex.png",
            level: 8
        },
        {
            name: "Grid Engine",
            img: "grid-engine.png",
            level: 7
        },
        {
            name: "Angular",
            img: "angular.png",
            level: 5
        },
        {
            name: "webpack",
            img: "webpack.png",
            level: 6
        }
    ];

    // sort skills
    techSkills.sort(function(a, b) {return b.level - a.level});

    waitForElement("#skills-tech").then(function() {
        var skillsTech = document.getElementById("skills-tech");
        for (var x of techSkills) {

            var cardTemplate = document.createElement('template');
            cardTemplate.innerHTML = cardHBS({skill: x});

            skillsTech.appendChild(cardTemplate.content.childNodes[0]);
        }
    });
}
