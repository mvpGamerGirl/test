'use strict';
const button = document.querySelector("buttom");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    h1.innerHTML = 'to jest nowa zawartość';
});