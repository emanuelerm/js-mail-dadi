/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.


Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/

// EMAIL   

let email = document.getElementById("userEmail");

let userEmail = ["emanuele@boolean.it", "clelia@boolean.it", "marco@boolean.it", "samuel@boolean.it"];

const btn = document.getElementById("login");


let valid = document.getElementById("valid");



btn.addEventListener("click", function (e) {
    e.preventDefault();
    let found = false;
    for (let i = 0; i < userEmail.length; i++) {
        if (userEmail[i] === email.value) {
            found = true;
            break;
        }
    }
    if (found) {
        valid.innerText = "Welcome!";
    } else {
        valid.innerText = "You are not welcome";
    }
    email.value = "";
})