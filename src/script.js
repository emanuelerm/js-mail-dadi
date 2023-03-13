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

let userEmail = ["emanuele@boolean.it", "clelia@boolean.it", "marco@boolean.it", "samuel@boolean.it"]
const btn = document.getElementById("login");





btn.addEventListener("click", function () {
    for (let i = 0; i < userEmail.length; i++) {
        if (userEmail[i] === email.value) {
            console.log("welcome");
        } else {
            console.log("access denied");
        }
    }


})