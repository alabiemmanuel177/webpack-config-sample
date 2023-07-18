import generateJoke from "./generateJoke";
import logo from "./assets/white_logo.svg";

const white_logoImg = document.getElementById("white_logoImg");
white_logoImg.src = logo;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
