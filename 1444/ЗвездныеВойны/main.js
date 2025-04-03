console.log("Нажмите числа от 1 до 7, И Примите Позиции");
console.log("Атака: Зажмите Ctrl, и Стрелку Направления для Удара");
console.log("Защита: Зажмите Shift, и Стрелку Направления для Блока");
console.log("Перемещение: Зажмите Стрелку Направления для Перемещения");

let position = 0;

document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    console.log("Железная Дверь");
    position = 1;
  } else if (event.key === "2") {
    console.log("Позиция Гнева");
    position = 2;
  } else if (event.key === "3") {
    console.log("Верхняя Позиция Гнева");
    position = 3;
  } else if (event.key === "4") {
    console.log("День или Высокая Позиция");
    position = 4;
  } else if (event.key === "5") {
    console.log("5 защита");
    position = 5;
  } else if (event.key === "6") {
    console.log("6 защита");
    position = 6;
  } else if (event.key === "7") {
    console.log("5 сабельная защита");
    position = 7;
  }
  if (
    event.ctrlKey &&
    event.key === "ArrowUp" &&
    (position == 5 || position == 6 || position == 1)
  ) {
    console.log("Колющий Удар Вверх");
  } else if (
    event.ctrlKey &&
    event.key === "ArrowDown" &&
    (position == 5 || position == 6)
  ) {
    console.log("Колющий Удар Вниз");
  } else if (
    event.ctrlKey &&
    event.key === "ArrowLeft" &&
    (position == 5 || position == 6)
  ) {
    console.log("Колющий Удар Вправо");
  } else if (
    event.ctrlKey &&
    event.key === "ArrowRight" &&
    (position == 5 || position == 6)
  ) {
    console.log("Колющий Удар Влево");
  }
  if (
    event.ctrlKey &&
    event.key === "ArrowUp" &&
    (position == 2 || position == 3 || position == 4)
  ) {
    console.log("Рубящий Удар Вверх");
  } else if (
    event.ctrlKey &&
    event.key === "ArrowDown" &&
    (position == 2 || position == 3 || position == 4)
  ) {
    console.log("Рубящий Удар Вниз");
  } else if (
    event.ctrlKey &&
    event.key === "ArrowLeft" &&
    (position == 2 || position == 3 || position == 4)
  ) {
    console.log("Рубящий Удар Вправо");
  } else if (
    event.ctrlKey &&
    event.key === "ArrowRight" &&
    (position == 2 || position == 3 || position == 4)
  ) {
    console.log("Рубящий Удар Влево");
  }
  if (event.shiftKey && event.key === "ArrowUp") {
    console.log("Защита Вверх");
  } else if (event.shiftKey && event.key === "ArrowDown") {
    console.log("Защита Вниз");
  } else if (event.shiftKey && event.key === "ArrowLeft") {
    console.log("Защита Вправо");
  } else if (event.shiftKey && event.key === "ArrowRight") {
    console.log("Защита Влево");
  }
});

// console.log("Случайное Число: ", Math.random());

// function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// const rndInt = randomIntFromInterval(1, 6);
// console.log(rndInt);
