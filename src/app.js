/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".carta").classList.add("heart");
  setTimeout(() => {
    document.querySelector(".carta").classList.remove("heart");
    document.querySelector(".carta").classList.add("spade");
  }, 1000);
};
