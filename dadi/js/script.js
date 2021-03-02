// Generatore numeri random

// Così tira numeri da 0 a 6
// var giocatore1 = Math.floor(Math.random() * 7);
// console.log(giocatore1);

// var giocatorePc = Math.floor(Math.random() * 7);
// console.log(giocatorePc);

// Così tira numeri da 1 a 6
var giocatore1 = Math.floor(Math.random() * 6) + 1;
console.log(giocatore1);

var giocatorePc = Math.floor(Math.random() * 6) + 1;
console.log(giocatorePc);

// Stabilire il vincitore

if (giocatore1 > giocatorePc){
  document.getElementById("vincitore").innerHTML = "Hai vinto"
} else if (giocatore1 < giocatorePc){
  document.getElementById("vincitore").innerHTML = "Hai perso"
}
