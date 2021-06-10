// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// 1. Genero numeri random
var numeroUtente = Math.floor(Math.random() * 6) + 1;
var numeroPc = Math.floor(Math.random() * 6) + 1;
// Così tira numeri da 0 a 6 -> var giocatore = Math.floor(Math.random() * 7);


// 2. Stabilisco il vincitore
var esito = "Ha vinto il ";

if (numeroUtente > numeroPc){
  esito += "numeroUtente";
} else if (numeroUtente < numeroPc){
  esito += "numeroPc";
} else {
  esito = "Avete pareggiato";
}

// 3. Stampo numeri
document.getElementById('numeroUtente').innerHTML ="Il numeroUtente è: " + numeroUtente;
document.getElementById('numeroPc').innerHTML ="Il numeroPc è: " + numeroPc;
document.getElementById('esito').innerHTML = esito;
