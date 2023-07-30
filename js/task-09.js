// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.

// < div class="widget" >
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </ >

//   Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const colorChanger = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');
colorChanger.addEventListener('click', colorHandler);

function colorHandler() {
  const randColor = getRandomHexColor();
  body.style.backgroundColor = randColor;
  span.textContent = randColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}