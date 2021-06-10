// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Creo array con una lista di mail
var email = ["mario.rossi@gmail.com", "mario.bianchi@gmail.com", "sara.rossi@gmail.com", "sara.bianchi@gmail.com" ];

// Chiedo di inserire una mail
var utente = prompt("Inserire email");

// Controllo se la mail dell'utente è in lista
var emailValida;

for ( var i = 0; i < email.length; i++ ){
  if ( utente == email[i] ) {
    //attenzione che se scrivo utente = emailValida gli dico che utente è uguale a Undefined perchè la var emailValida non è definita.
    //l'ordine è importante, si legge sempre da sinistra a destra
    emailValida = utente;
  }
}

if ( emailValida == utente ){
  document.getElementById('lista').innerHTML = emailValida + " questo indirizzo email è in lista";
} else {
  document.getElementById('lista').innerHTML = "Questo indirizzo email NON è in lista";
}
