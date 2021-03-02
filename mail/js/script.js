var email = ["mario.rossi@gmail.com", "mario.bianchi@gmail.com", "sara.rossi@gmail.com", "sara.bianchi@gmail.com" ];

var utente = prompt("Inserire email");

var emailValida;

for ( var i = 0; i < email.length; i++ ){
  if ( utente == email[i] ) {
    //attenzione che se scrivo utente = emailValida gli dico che utente è uguale a Undefined perchè la var emailValida non è definita.
    //l'ordine è importante, si legge sempre da sinistra a destra 
    emailValida = utente;
  }
}

if ( emailValida == utente ){
  console.log("email valida");
  document.getElementById('lista').innerHTML = emailValida + " questo indirizzo email è in lista";
} else {
  console.log("email non valida");
  document.getElementById('lista').innerHTML = "Questo indirizzo email NON è in lista";
}
