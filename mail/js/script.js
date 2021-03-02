var email = ["mario.rossi@gmail.com", "mario.bianchi@gmail.com", "sara.rossi@gmail.com", "sara.bianchi@gmail.com" ];

var utente = prompt("Inserire email");

var emailValida;

for ( var i = 0; i < email.length; i++ ){
  if ( utente == email[i] ) {
    utente = emailValida;
  }
}

if ( emailValida == utente ){
  console.log("email valida");
  document.getElementById('lista').innerHTML = emailValida + " questo indirizzo email è in lista";
} else {
  console.log("email non valida");
  document.getElementById('lista').innerHTML = "Questo indirizzo email NON è in lista";
}
