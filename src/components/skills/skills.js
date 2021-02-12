import waitForElement from '@/utils.js';

import skillsHTML from './skills.html';
import cardHBS from './card.hbs';
import './skills.css';

export default function renderSkills(container) {
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
            name: 'Google Cloud',
            img: 'gcp.png',
            level: 7
        },
        {
            name: "Angular",
            img: "angular.png",
            level: 5
        }
    ]

    //
    var template = document.createElement('template');
    template.innerHTML = skillsHTML;

    if (template.content.childNodes.length != 1) {
        document.write("Error loading aboutme HTML")
    } else {
        container.appendChild(template.content.childNodes[0]);
        // sort skills
        techSkills.sort(function(a, b) {return a - b});

        waitForElement("#skills-tech").then(function() {
            var skillsTech = document.getElementById("skills-tech");
            for (var x of techSkills) {

                var cardDiv = document.createElement("div");
                cardDiv.classList.add("card");
                cardDiv.classList.add("m-1");
                cardDiv.classList.add("col-sm-12");
                cardDiv.classList.add("col-md-4");
                cardDiv.classList.add("col-lg-4");
                cardDiv.classList.add("mb-2");
                cardDiv.classList.add("pl-0");
                cardDiv.classList.add("pr-0");

                cardDiv.innerHTML = cardHBS({skill: x});
                skillsTech.appendChild(cardDiv);
            }
        });

    }
}