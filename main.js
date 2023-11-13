"use strict";

let teamMembers = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    }, {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    }, {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    }, {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
];

function createCard(cardData) {
    let result = `
    <div class="member">
        <img class="image" src="./img/${cardData.image}" >
        <p class="name">${cardData.name}</p>
        <p class="role">${cardData.role}</p>
    </div>`;

    return result;
}

function renderCards() {

    let container = document.getElementById("container");
    container.innerHTML = "";

    for (let i = 0; i < teamMembers.length; i++) {
        const person = teamMembers[i];

        const memberCard = createCard(person);
        container.innerHTML += memberCard;

        // console.log(`Nome: ${person.name}, Ruolo: ${person.role}), Immagine: ${person.image}` );
        // for(let key in person) {
        //     console.log( person[key] );
        // }
    }
}

function addMember() {

    let newName = document.getElementById("newName").value;
    let newRole = document.getElementById("newRole").value;
    let newImage = document.getElementById("newImage").value;

    // let newMember = {};
    // newMember.name = newName;
    // newMember.role = newRole;
    // newMember.image = newImage;
    // console.log(newMember);

    if(newImage=="") {
        newImage = "placeholder.jpg";
    }

    let newMember = {
        name: newName,
        role: newRole,
        image: newImage
    };
    teamMembers.push(newMember);

    // Cancello e riscrivo TUTTE le cards, inclusa quella nuova
    // renderCards();

    // Aggiungo solo la nuova cards
    // let container = document.getElementById("container");
    // let newMemberCard = createCard(newMember);
    // container.innerHTML += newMemberCard;

    // Come il precedente, ma senza variabili di appoggio
    document.getElementById("container").innerHTML += createCard(newMember);

}

/************************** CARICAMENTO PAGINA *******************************/
console.log(teamMembers);

renderCards();

document.getElementById("addMemberBtn").addEventListener("click", addMember);
/********************** FINE CARICAMENTO PAGINA *******************************/



