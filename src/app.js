/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  function generarCarta() {
    let palos = ["♦", "♠", "♣", "♥"];
    let valores = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A"
    ];

    let palo = palos[Math.floor(Math.random() * palos.length)];
    let valor = valores[Math.floor(Math.random() * valores.length)];
    return { valor: valor, palo: palo };
  }

  function mostrarCarta() {
    let carta = generarCarta();
    document.querySelector(".numero").textContent = carta.valor;
    let pintasup = document.querySelector(".simboloSup");
    pintasup.textContent = carta.palo;

    let pintaInfe = document.querySelector(".simboloInfe");
    pintaInfe.textContent = carta.palo;
    if (carta.palo == "♥" || carta.palo == "♦") {
      pintaInfe.style.color = "red";
      pintasup.style.color = "red";
    }
  }

  mostrarCarta();
};
