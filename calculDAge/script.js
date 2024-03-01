let calculAge = document.getElementById('calculAge');

// fonction Recuperation des valeurs des inputs
const recupererValeurs = () => {
    let ageUser = document.getElementById('ageUser');
    let contentAgeValue = document.getElementById('ageValue');
    return { ageUser, contentAgeValue };
}

// fonction pour calculer l'âge et afficher les valeurs
const calculerAge = () => {
    const { ageUser, contentAgeValue } = recupererValeurs();
    const currentDate = new Date();
    const birthDate = new Date(ageUser.value);
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // verifier si l'anniv est passé
    const isBirthdayPassed = currentDate.getMonth() > birthDate.getMonth()
        || (currentDate.getMonth() === birthDate.getMonth()
            && currentDate.getDate() >= birthDate.getDate());

    // diminuer l'âge de 1 si l'anniv n'est pas passé
    if (!isBirthdayPassed) {
        age--;
    }

    // afficher l'âge
    contentAgeValue.innerHTML = age;
}

// appel de la fonction calculerAge
calculAge.addEventListener('click', calculerAge);


// OZ
document.getElementById('signeMoko').addEventListener('click', () => {
    // redirection vers mon site web sur un nouvel onglet
    window.open('https://codeoz.pythonanywhere.com/');
});