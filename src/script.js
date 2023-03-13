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

const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

let emailCorrect = "";
const emailValidator = "" + "@boolean.it"

if (emailCorrect === emailValidator) {
    console.log(emailCorrect);
} else {
    alert("Your email address isn't correct")
}