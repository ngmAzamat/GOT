console.log("Изпользуете клавишу f что бы Опустить Забрало");
console.log("Изпользуете клавишу SHIFT F что бы Поднять Забрало");
let isDefending = false;
let position = 0;
let Won = false;

function raiseTheVisor() {}
function lowerTheVisor() {}

function moveUp() {
  const box = document.getElementById("coldier2");
  const currentTop = parseInt(window.getComputedStyle(box).top) || 0;
  box.style.top = currentTop - 10 + "px";
}
function moveDown() {
  const box = document.getElementById("coldier2");
  const currentTop = parseInt(window.getComputedStyle(box).top) || 0;
  box.style.top = currentTop + 10 + "px";
}

let distance = 7;

function canAttackOrDefend(ctrlRequired, positionsAllowed, directionKey) {
  return (
    event.ctrlKey === ctrlRequired &&
    positionsAllowed.includes(position) &&
    distance === 0 &&
    directionKey
  );
}

document.addEventListener("keydown", (event) => {
  const isCtrlPressed = event.ctrlKey;
  const isShiftPressed = event.shiftKey;

  // Функция для проверки нажатия клавиш направления
  function isDirectionKey(key) {
    return ["w", "s", "a", "d"].includes(key);
  }

  // Выбор позиции с клавиш 1-7
  switch (event.key) {
    case "1":
      console.log("Железная Дверь");
      position = 1;
      break;
    case "2":
      console.log("Позиция Гнева");
      position = 2;
      break;
    case "3":
      console.log("Верхняя Позиция Гнева");
      position = 3;
      break;
    case "4":
      console.log("День или Высокая Позиция");
      position = 4;
      break;
    case "5":
      console.log("5 защита");
      position = 5;
      break;
    case "6":
      console.log("6 защита");
      position = 6;
      break;
    case "7":
      console.log("5 сабельная защита");
      position = 7;
      break;
  }

  // Проверка атаки для разных позиций
  if (canAttackOrDefend(true, [5, 6, 1], isDirectionKey(event.key))) {
    switch (event.key) {
      case "w":
        console.log("Колющий Удар Вверх");
        Won = true;
        break;
      case "s":
        console.log("Колющий Удар Вниз");
        Won = true;
        break;
      case "a":
        console.log("Колющий Удар Вправо");
        Won = true;
        break;
      case "d":
        console.log("Колющий Удар Влево");
        Won = true;
        break;
    }
  }

  // Проверка других атак
  if (canAttackOrDefend(true, [2, 3, 4, 7], isDirectionKey(event.key))) {
    switch (event.key) {
      case "w":
        console.log("Рубящий Удар Вверх");
        Won = true;
        break;
      case "s":
        console.log("Рубящий Удар Вниз");
        Won = true;
        break;
      case "d":
        console.log("Рубящий Удар Вправо");
        Won = true;
        break;
      case "a":
        console.log("Рубящий Удар Влево");
        Won = true;
        break;
    }
  }

  // Проверка защиты
  if (
    isShiftPressed &&
    position !== 0 &&
    distance === 0 &&
    isDirectionKey(event.key)
  ) {
    switch (event.key) {
      case "W":
        console.log("Защита Вверх");
        isDefending = true;
        break;
      case "S":
        console.log("Защита Вниз");
        isDefending = true;
        break;
      case "A":
        console.log("Защита Вправо");
        isDefending = true;
        break;
      case "D":
        console.log("Защита Влево");
        isDefending = true;
        break;
    }
  }

  // Обработка перемещения
  if (event.key === "w") {
    distance = distance - 1;
    moveUp();
  }
  if (event.key === "s") {
    distance = distance + 1;
    moveDown();
  }
  if (event.key === "f") {
    raiseTheVisor();
  }
  if (isShiftPressed && event.key === "F") {
    lowerTheVisor();
  }
  if (Won === true) {
    console.log("Победа");
  }
});
