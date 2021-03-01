var email = ["mario.rossi@gmail.com", "mario.bianchi@gmail.com", "sara.rossi@gmail.com", "sara.bianchi@gmail.com" ];

var utente = prompt("Inserire email");

var emailValida;

for ( var i = 0; i < email.length; i++ ){
  if ( utente == email[i] ) {
    emailValida = utente;
  }
}

if ( emailValida = utente ){
  document.getElementById('lista').innerHTML = emailValida + " questo indirizzo email è in lista";
} else{
  document.getElementById('lista').innerHTML = emailValida + " questo indirizzo email NON è in lista";
}
