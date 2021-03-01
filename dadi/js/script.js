// Generatore numeri random

var giocatore1 = Math.floor(Math.random() * 7);
console.log(giocatore1);

var giocatorePc = Math.floor(Math.random() * 7);
console.log(giocatorePc);

// Stabilire il vincitore

if (giocatore1 > giocatorePc){
  document.getElementById("vincitore").innerHTML = "Hai vinto"
}

if (giocatore1 < giocatorePc){
  document.getElementById("vincitore").innerHTML = "Hai perso"
}
