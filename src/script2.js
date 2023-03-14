const btnDadi = document.getElementById("giochiamo");
let umano = document.getElementById("umano");
let computer = document.getElementById("computer");

btnDadi.addEventListener("click", lancioDadi);

function lancioDadi() {
    let numeroUmano = Math.floor(Math.random() * 6) + 1;
    let numeroComputer = Math.floor(Math.random() * 6) + 1;

    umano.innerText = `Hai tirato un ${numeroUmano}`;
    computer.innerText = `Il computer ha tirato un ${numeroComputer}`;

    if (numeroUmano > numeroComputer) {
        console.log("Hai vinto!");
    } else if (numeroUmano < numeroComputer) {
        console.log("Hai perso!");
    } else {
        console.log("Pareggio!");
    }
}