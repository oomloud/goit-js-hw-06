// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const control = document.querySelector('input[type="range"]');
const text = document.querySelector("#text");
text.style.fontSize = `${control.value}px`;

control.addEventListener("input", textHandler);

function textHandler(evt) {
  text.style.fontSize = `${evt.currentTarget.value}px`;
}
