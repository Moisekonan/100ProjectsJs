const btnLancer = document.querySelector('#roll-button');
const dee = document.querySelector('#dice');
const historyLancer = document.querySelector('#roll-history');

let historyList = [];

function lancerDee() {
    const resultLancer = Math.floor(Math.random() * 6) + 1;
    console.log("result du dee", resultLancer)
    const diceFace = getFaceDee(resultLancer);
    console.log("face du dee", diceFace);
    dee.innerHTML = diceFace;
    console.log("contenu du dee", dee);
    historyList.push(resultLancer);
    console.log("list des history du dee", historyList);
    updateRollHistory();
}

function updateRollHistory() {
    historyLancer.innerHTML = "";
    for (let i = 0; i < historyList.length; i++) {
        // creer un li
        const listItem = document.createElement("li");
        // affichage du contenu dans le li qui a ete creer
        listItem.innerHTML = `Lancement ${i + 1}: <span>${getFaceDee(historyList[i])}</span>`;
        // ajout dans la balise <ul>
        historyLancer.appendChild(listItem);
    }
}

function getFaceDee(resultLancer) {
    switch (resultLancer) {
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    }
}

btnLancer.addEventListener("click", function() {
    dee.classList.add("roll-animation");
    setTimeout(() => {
        dee.classList.remove("roll-animation");
        lancerDee();
    }, 1000);
});











// const buttonEl = document.getElementById("roll-button");

// const diceEl = document.getElementById("dice");

// const rollHistoryEl = document.getElementById("roll-history");

// let historyList = [];

// function rollDice() {
//     const rollResult = Math.floor(Math.random() * 6) + 1;
//     const diceFace = getDiceFace(rollResult);
//     diceEl.innerHTML = diceFace;
//     historyList.push(rollResult);
//     updateRollHistory();
// }

// function updateRollHistory() {
//     rollHistoryEl.innerHTML = "";
//     for (let i = 0; i < historyList.length; i++) {
//         const listItem = document.createElement("li");
//         listItem.innerHTML = `Lancement ${i + 1}: <span>${getDiceFace(
//             historyList[i]
//         )}</span>`;
//         rollHistoryEl.appendChild(listItem);
//     }
// }

// function getDiceFace(rollResult) {
//     switch (rollResult) {
//         case 1:
//             return "&#9856;";
//         case 2:
//             return "&#9857;";
//         case 3:
//             return "&#9858;";
//         case 4:
//             return "&#9859;";
//         case 5:
//             return "&#9860;";
//         case 6:
//             return "&#9861;";
//         default:
//             return "";
//     }
// }

// buttonEl.addEventListener("click", () => {
//     diceEl.classList.add("roll-animation");
//     setTimeout(() => {
//         diceEl.classList.remove("roll-animation");
//         rollDice();
//     }, 1000);
// });