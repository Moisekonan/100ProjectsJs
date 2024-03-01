let calcul = document.getElementById('calculer');

// fonction Recuperation des valeurs des inputs
function recupererValeurs() {
    let montant = document.getElementById('montant');
    let pourboire = document.getElementById('pourboire');
    let pourboireValue = document.getElementById('pourboireValue');
    let totalValue = document.getElementById('totalValue');
    return { montant, pourboire, pourboireValue, totalValue };
}

// fonction pour calculer le pourboire, le total et afficher les valeurs
function calculerPourboire() {
    let { montant, pourboire, pourboireValue, totalValue } = recupererValeurs();
    pourboireValue.innerHTML = (montant.value * pourboire.value / 100).toFixed(2);
    totalValue.innerHTML = (parseFloat(montant.value) + parseFloat(pourboireValue.innerHTML)).toFixed(2);
}

// appel de la fonction calculerPourboire
calcul.addEventListener('click', calculerPourboire);


// OZ
document.getElementById('signeMoko').addEventListener('click', () => {
    // redirection vers mon site web sur un nouvel onglet
    window.open('https://codeoz.pythonanywhere.com/');
});