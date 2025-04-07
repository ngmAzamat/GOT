console.log("Нажмите числа от 1 до 7, И Примите Позиции");
console.log("Атака: Зажмите Ctrl, и Стрелку Направления для Удара");
console.log("Защита: Зажмите Shift, и Стрелку Направления для Блока");
console.log("Перемещение: Зажмите Стрелку Направления для Перемещения");

// game();

function game() {
  let money = 2190;

  alert(
    "1460 год, Кент. вы Победили Самаго Опытного Чеширского Лучника! - Капитан Ричард"
  );
  alert(
    "Он стрелял имея скорость 30 стрел в Минуту! Браво Генри - Капитан Ричард"
  );
  alert(
    "я Вынужден нанять вас на Королевскую Службу... вы Перспективен, Я вас Найму На Год - Капитан Ричард"
  );
  alert("Сэр, я готов Заключить Контракт... - Генри из Кентербери");
  alert(
    "Йорки! Беги На север Дониси Вести Королю Генри Ланкастеру! Мне не спастись! бери все Жалование На Год! вот 2190 пенсов, это почти 10 фунтов!  - Капитан Ричард"
  );
  alert("я Таих Цифр в Жизни не видел! да На Это!...  - Генри из Кентербери");
  alert(
    "Добро Пожаловать в Кентерберийскую Кузницу, Лучшая, Самая Дешевая... - Эдуард, Кузнец из Кентербери"
  );
  alert("Да Помню я, у меня крупный заказ - Генри из Кентербери");

  const items = {
    1: { name: "Шлем Бацинет", price: 400 },
    2: { name: "Койф Кольчужный", price: 200 },
    3: { name: "Стеганный Шлем", price: 40 },
    4: { name: "Кираса", price: 400 },
    5: { name: "Кольчуга", price: 200 },
    6: { name: "Дуплет", price: 40 },
    7: { name: "Рукова и Варежка Стеганные", price: 40 },
    8: { name: "Рукова и Варежка из Кольчуги", price: 200 },
    9: { name: "Латные Руки", price: 400 },
    10: { name: "Ноги Стеганные", price: 40 },
    11: { name: "Ноги из Кольчуги", price: 200 },
    12: { name: "Латные Ноги", price: 400 },
    13: { name: "Щит", price: 100 },
    14: { name: "Фальшион", price: 100 },
    15: { name: "Меч", price: 150 },
    16: { name: "Двуручный Меч", price: 200 },
  };

  let inventory = [];

  while (true) {
    let list = "вот мой ассортимент: - Эдуард, Кузнец из Кентербери\n";
    for (const [key, item] of Object.entries(items)) {
      list += `${key}. ${item.name} - ${item.price} пенсов\n`;
    }
    list += `У вас ${money} пенсов.\nВведите номер предмета, который хотите купить, или "0" чтобы закончить:`;

    const input = prompt(list);
    const choice = parseInt(input);

    if (choice === 0 || isNaN(choice)) {
      break;
    }

    const item = items[choice];
    if (item) {
      if (money >= item.price) {
        inventory.push(item.name);
        money -= item.price;
        alert(
          `Вы купили: ${item.name} за ${item.price} пенсов\nОсталось: ${money} пенсов`
        );
      } else {
        alert("Недостаточно пенсов! Поговорите с Ричардом, может одолжит...");
      }
    } else {
      alert("Такого предмета нет. Эдуард ворчит недовольно.");
    }
  }

  if (inventory.length > 0) {
    alert(`Вы приобрели: ${inventory.join(", ")}`);
  } else {
    alert("Вы ушли из кузницы ни с чем.");
  }

  const ArmorForRightHands = 0;
  const ArmorForLeftHands = 0;
  const ArmorForLeg = 0;
  const Cuirass = 0;
  const helmet = 0;
  const twoSwordKolyhiy = 100;
  const swordKolyhiy = 50;
  const falchionKolyhiy = 10;
  const twoSwordRybashiy = 20;
  const swordRybashiy = 10;
  const falchionRybashiy = 50;

  const whoI = prompt(
    "Кент. Кто Вы? - Некий Вооруженный Человек, 1. Я Генри из Кентербери, Солдат Короля Генриха VI Ланкастера, кто вы? 2. я Горожанин из Кентербери... "
  );
  if (whoI == 1) {
    alert("Убирайся Мерский Ланкастер-Наемник");
    // должна быть дуэль
  } else {
    alert(
      "Я Филипп Из Гента, Солдат Герцога Филиппа III Валуа, Воин Герцога Йорка..."
    );
    alert(
      "Лондон. Генри? вы уже в лондоне! в Кенте есть много Разбойников - Капитан Ричард"
    );
    alert("Вы собираетесь Отправится с ротой в Кент? - Генри из Кентербери");
    alert("нет, Мы Идем в Йоркшир! Уэйкфилд! - Генри из Кентербери");
  }
}

const playerName = prompt("Введите ваше имя, фехтовальщик:");

if (playerName) {
  alert(`Добро пожаловать, ${playerName}! Приготовьтесь к бою!`);
} else {
  alert("Вы отказались назвать имя. Манекен не впечатлён...");
}

let isDefending = false;

checkDefendingLater();

let position = 0;
let Won = false;

function checkDefendingLater() {
  setTimeout(() => {
    if (isDefending === true && Won === false) {
      console.log("Стрела Отбита");
      checkDefendingLater();
      isDefending = false;
    } else if (Won === true) {
      game();
    } else {
      console.log("Стрела не Отбита");
      return;
    }
  }, 2000);
}
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
});
