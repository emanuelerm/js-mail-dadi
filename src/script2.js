const btnDadi = document.getElementById("giochiamo");
let umano = document.getElementById("umano");
let computer = document.getElementById("computer");
let result = document.getElementById("result");

btnDadi.addEventListener("click", lancioDadi);

function lancioDadi() {
    let numeroUmano = Math.floor(Math.random() * 6) + 1;
    let numeroComputer = Math.floor(Math.random() * 6) + 1;

    umano.innerText = `Hai tirato un ${numeroUmano}`;
    computer.innerText = `Il computer ha tirato un ${numeroComputer}`;

    if (numeroUmano > numeroComputer) {
        result.innerText = "Hai vinto!";
    } else if (numeroUmano < numeroComputer) {
        result.innerText = "Hai perso!";
    } else {
        result.innerText = "Pareggio!";
    }
}