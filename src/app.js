/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload =   function generarCarta() {
  let palos = ['♦', '♠', '♣', '♥'];
  let valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  let palo = palos[getRandomInt(0, palos.length - 1)];
  let valor = valores[getRandomInt(0, valores.length - 1)];

  return { valor: valor, palo: palo };
}

function mostrarCarta() {
  let carta = generarCarta();
  document.querySelector('.numero').textContent = carta.valor;
  document.querySelector('.simboloSup').textContent = carta.palo;
  document.querySelector('.simboloInfe').textContent = carta.palo;
}

mostrarCarta();
});

