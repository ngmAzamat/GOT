console.log("Нажмите числа от 1 до 7, И Примите Позиции");
console.log("Атака: Зажмите Ctrl, и Стрелку Направления для Удара");
console.log("Защита: Зажмите Shift, и Стрелку Направления для Блока");
console.log("Перемещение: Зажмите Стрелку Направления для Перемещения");

// Rybashiy - Защита от Рубящего Удара
// Kolyhiy - Защита от Колющего Удара

let isDefendingJohn = false;
let isDefendingHenry = false;
let isDefending = false;
let position = 0;
let Won = false;
let distance = 7;
let WonInTournament = false;
let weapon;
let money = 2190;

// maneken();

game();

function duel() {
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
    }

    // Проверка атаки для разных позиций
    if (canAttackOrDefend(true, 1, isDirectionKey(event.key))) {
      switch (event.key) {
        case "w":
          console.log("Колющий Удар Вверх");
          UdarHenry(1, "Top");
          break;
        case "s":
          console.log("Колющий Удар Вниз");
          UdarHenry(1, "Bottom");
          break;
        case "a":
          console.log("Колющий Удар Вправо");
          UdarHenry(1, "Right");
          break;
        case "d":
          console.log("Колющий Удар Влево");
          UdarHenry(1, "Left");
          break;
      }
    }

    // Проверка других атак
    if (canAttackOrDefend(true, 2, isDirectionKey(event.key))) {
      switch (event.key) {
        case "w":
          console.log("Рубящий Удар Вверх");
          UdarHenry(2, "Top");
          break;
        case "s":
          console.log("Рубящий Удар Вниз");
          UdarHenry(2, "Bottom");
          break;
        case "d":
          console.log("Рубящий Удар Вправо");
          UdarHenry(2, "Right");
          break;
        case "a":
          console.log("Рубящий Удар Влево");
          UdarHenry(2, "Left");
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
}

function UdarHenry(typeOfImpact, directionOfImpact) {
  setTimeout(() => {
    if (isDefendingJohn === true) {
      console.log("Удар Отбита");
      isDefendingJohn = false;
    } else {
      console.log("Удар не Отбита");
      if (typeOfImpact === 1) {
        if (directionOfImpact === "Top") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.TopKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.TopKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.TopKolyhiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Bottom") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.BottomKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.BottomKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.BottomKolyhiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Right") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.RightKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.RightKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.RightKolyhiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Left") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.LeftKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.LeftKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.LeftKolyhiy / 100) * 10);
          }
        }
      }
      if (typeOfImpact === 2) {
        if (directionOfImpact === "Top") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.TopRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.TopRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.TopRybashiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Bottom") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.BottomRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.BottomRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.BottomRybashiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Right") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.RightRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.RightRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.RightRybashiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Left") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (nanosnik.LeftRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (nanosnik.LeftRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (nanosnik.LeftRybashiy / 100) * 10);
          }
        }
      }
    }
  }, 1250);
}
function UdarJohn(typeOfImpact, directionOfImpact) {
  setTimeout(() => {
    if (isDefendingJohn === true) {
      console.log("Удар Отбита");
      isDefendingJohn = false;
    } else {
      console.log("Удар не Отбита");
      if (typeOfImpact === 1) {
        if (directionOfImpact === "Top") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (TopKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health = nanosnik.health - (50 - (TopKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health = nanosnik.health - (10 - (TopKolyhiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Bottom") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (BottomKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (BottomKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (BottomKolyhiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Right") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (RightKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (RightKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (RightKolyhiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Left") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (LeftKolyhiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health = nanosnik.health - (50 - (LeftKolyhiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health = nanosnik.health - (10 - (LeftKolyhiy / 100) * 10);
          }
        }
      }
      if (typeOfImpact === 2) {
        if (directionOfImpact === "Top") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (TopRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health = nanosnik.health - (50 - (TopRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health = nanosnik.health - (10 - (TopRybashiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Bottom") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (BottomRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (BottomRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (BottomRybashiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Right") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (RightRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (RightRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (RightRybashiy / 100) * 10);
          }
        }
        if (directionOfImpact === "Left") {
          if (weapon === 1) {
            nanosnik.health =
              nanosnik.health - (100 - (LeftRybashiy / 100) * 100);
          }
          if (weapon === 2) {
            nanosnik.health =
              nanosnik.health - (50 - (LeftRybashiy / 100) * 50);
          }
          if (weapon === 3) {
            nanosnik.health =
              nanosnik.health - (10 - (LeftRybashiy / 100) * 10);
          }
        }
      }
    }
  }, 1250);
}

const nanosnik = {
  name: "Джон Наносник",
  weapon: "Двуручный Меч",
  RightRybashiy: 70,
  LeftRybashiy: 70,
  BottomRybashiy: 70,
  TopRybashiy: 100,

  RightKolyhiy: 45,
  LeftKolyhiy: 45,
  BottomKolyhiy: 45,
  TopKolyhiy: 70,

  health: 100,
  if(playerIsAttacking) {
    if (Math.random() < 0.75) {
      bot.parry(playerAttackDirection);
    }
  },

  attack() {
    UdarJohn();
  },
};

function checkingArmor(inventory) {
  let Cuirass = 0;

  let RightRybashiy = 0;
  let LeftRybashiy = 0;
  let BottomRybashiy = 0;
  let TopRybashiy = 0;

  let RightKolyhiy = 0;
  let LeftKolyhiy = 0;
  let BottomKolyhiy = 0;
  let TopKolyhiy = 0;
  for (const item of inventory) {
    if (item === "Шлем Бацинет") {
      alert("Оденьте Шлем Бацинет");
      TopRybashiy += 100;
      TopKolyhiy += 50;
    } else if (item === "Койф Кольчужный") {
      alert("Оденьте Койф Кольчужный");
      TopRybashiy += 50;
      TopKolyhiy += 25;
    } else if (item === "Стеганный Шлем") {
      alert("Оденьте Стеганный Шлем");
      TopRybashiy += 25;
      TopKolyhiy += 25;
    } else if (item === "Кираса") {
      alert("Оденьте Кираса");
      Cuirass += 30;
    } else if (item === "Кольчуга") {
      alert("Оденьте Кольчуга");
      Cuirass += 20;
    } else if (item === "Дуплет") {
      alert("Оденьте Дуплет");
      Cuirass += 10;
    } else if (item === "Правый Рукав и Варежка Стеганные") {
      alert("Оденьте Правый Рукав и Варежка Стеганные");
      RightRybashiy += 25;
      RightKolyhiy += 25;
    } else if (item === "Правый Рукав и Варежка из Кольчуги") {
      alert("Оденьте Правый Рукав и Варежка из Кольчуги");
      RightRybashiy += 50;
      RightKolyhiy += 25;
    } else if (item === "Правая Латная Рука") {
      alert("Оденьте Правая Латная Рука");
      RightRybashiy += 100;
      RightKolyhiy += 50;
    } else if (item === "Левый Рукав и Варежка Стеганные") {
      alert("Оденьте Левый Рукав и Варежка Стеганные");
      LeftRybashiy += 25;
      LeftKolyhiy += 25;
    } else if (item === "Левый Рукав и Варежка из Кольчуги") {
      alert("Оденьте Левый Рукав и Варежка из Кольчуги");
      LeftRybashiy += 50;
      LeftKolyhiy += 25;
    } else if (item === "Левая Латная Рука") {
      alert("Оденьте Левая Латная Рука");
      LeftRybashiy += 100;
      LeftKolyhiy += 50;
    } else if (item === "Ноги Стеганные") {
      alert("Оденьте Ноги Стеганные");
      BottomRybashiy += 25;
      BottomKolyhiy += 25;
    } else if (item === "Ноги из Кольчуги") {
      alert("Оденьте Ноги из Кольчуги");
      BottomRybashiy += 50;
      BottomKolyhiy += 25;
    } else if (item === "Латные Ноги") {
      alert("Оденьте Латные Ноги");
      BottomRybashiy += 100;
      BottomKolyhiy += 50;
    } else if (item === "Щит") {
      alert("Возьмите Щит");
    } else if (item === "Фальшион") {
      alert("Возьмите Фальшион");
      weapon = 1;
    } else if (item === "Меч") {
      alert("Возьмите Меч");
      weapon = 2;
    } else if (item === "Двуручный Меч") {
      alert("Возьмите Двуручный Меч");
      weapon = 3;
    }
    RightRybashiy = RightRybashiy + Cuirass;
    LeftRybashiy = LeftRybashiy + Cuirass;
    BottomRybashiy = BottomRybashiy + Cuirass;
    TopRybashiy = TopRybashiy + Cuirass;

    RightKolyhiy = RightKolyhiy + Cuirass;
    LeftKolyhiy = LeftKolyhiy + Cuirass;
    BottomKolyhiy = BottomKolyhiy + Cuirass;
    TopKolyhiy = TopKolyhiy + Cuirass;
  }

  // Если вообще ничего нет — можно проверить длину инвентаря
  if (inventory.length === 0) {
    alert("Оденьте, хотя у вас вообще нет оружия");
  }
}

function tournament(spear) {
  alert("Сафрон-Уолден. Кто Это? - Генри из Кентербери");
  alert(
    "а Это, Его мы Называем Джон Наносик, когда его отец в Битве При Форьмини... сражался против Француза, ему Разбили Нос, и Его Сын Теперь ходит Только в Баценете с Наносником - Капитан Ричард"
  );
  duel();
  const a = prompt(
    "1. забрать нагрду в 100 пенсах 2. забрать награду в 20 копьях"
  );
  if (a == "1") {
    money = money + 100;
    return spear;
  }
  if (a == "2") {
    spear = true;
    return spear;
  }
}

function game() {
  alert(
    "1461 год, Кент. вы Победили Самаго Опытного Чеширского Лучника! - Капитан Ричард"
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
    7: { name: "Правый Рукав и Варежка Стеганные", price: 40 },
    8: { name: "Правый Рукав и Варежка из Кольчуги", price: 200 },
    9: { name: "Правая Латная Рука", price: 400 },
    10: { name: "Левый Рукав и Варежка Стеганные", price: 40 },
    11: { name: "Левый Рукав и Варежка из Кольчуги", price: 200 },
    12: { name: "Левая Латная Рука", price: 400 },
    13: { name: "Ноги Стеганные", price: 40 },
    14: { name: "Ноги из Кольчуги", price: 200 },
    15: { name: "Латные Ноги", price: 400 },
    16: { name: "Щит", price: 100 },
    17: { name: "Фальшион", price: 100 },
    18: { name: "Меч", price: 150 },
    19: { name: "Двуручный Меч", price: 200 },
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
  checkingArmor(inventory);
  const whoI = prompt(
    "Кент. Кто Вы? - Некий Вооруженный Человек, 1. Я Генри из Кентербери, Солдат Короля Генриха VI Ланкастера, кто вы? 2. я Горожанин из Кентербери... "
  );
  if (whoI == 1) {
    alert("Убирайся Мерский Ланкастер-Наемник");
    // duel();
  } else {
    alert(
      "Я Филипп Из Гента, Солдат Герцога Филиппа III Валуа, Воин Герцога Йорка..."
    );
    alert(
      "Лондон. Генри? вы уже в лондоне! в Кенте есть много Разбойников - Капитан Ричард"
    );
    alert("Вы собираетесь Отправится с ротой в Кент? - Генри из Кентербери");
    alert("нет, Мы Идем в Йоркшир! - Капитан Ричард");
    alert("Йоркшир? Зачем? Что Там Происходит? - Генри из Кентербери");
    alert("Вы не значете? - Капитан Ричард");
    alert("Ричард Герцог Йорк Убит в прошлом году - Капитан Ричард");
    alert("но наша армия Разбита и Оступила на Север - Капитан Ричард");
    alert("мы должны Помоч Королеве и Выдвинутся к Таутону - Капитан Ричард");
    let spear = false;
    spear = tournament(spear);
    alert("Йоркшир, Таутон. Удар Алебрадой");
    alert("... Нет, Мы не Добиваем Ранненых! -Первый Неизвесный Солдат");
    alert("Почему? все Добивают а Наша Рота нет! - Второй Неизвесный Солдат");
    alert("Мы Разбили Ланкастеров,Война Оконченна! - Первый Неизвесный Солдат");
    alert("Наша Работа теперь не Нужна Будет! - Первый Неизвесный Солдат");
    alert("а Так Хоть Грабители в Йоркшире Будут! - Первый Неизвесный Солдат");
    alert("Нас Наймут Для Борьбы с Грабителями! - Первый Неизвесный Солдат");
    alert("** Солаты Уходят **");
    const WhatIDouing = prompt(
      "Мысли Генри:\n" +
        "1. Победили Йорки... чтошь я должен идти к Йорку и там продать Доспехи, Хорошо что мне Заплатил Капитан Ричард!\n" +
        "2. я Наймусь На Службу Королю Эдуарду Йорку\n" +
        "3. нет! Война Только Начинается! Капитан Ричард и Генрих VI!\n" +
        "4. Грабителем Говорите?\n"
    );
    if (WhatIDouing == "1") {
      alert("КОНЕЦ\n" + "Генри Стал Купцев в Йорке");
    } else if (WhatIDouing == "2") {
      alert(
        "1485.Босворт. Что? Война Продолжается? а Это... Ланкастеры! Законные Короли! - Генри из Кентербери"
      );
      alert(
        "Ловите Предателя! Убейте его! Норфолк! Командуйте! - Ричард III Йорк"
      );
      alert(
        "КОНЕЦ\n" +
          "Генри Был Убит Выстрелом Из Аркебузы, Когда Решил что Ланкастеры Закконные Короли"
      );
    } else if (WhatIDouing == "3") {
      alert(
        "1471.Тьюксбери\n" +
          "КОНЕЦ\n" +
          "Генри Умер с Честью Достойной не Наемника, а Рыцаря"
      );
    } else if (WhatIDouing == "4") {
      EndOfTheGame(spear);
    }
  }
}

function EndOfTheGame(spear) {
  alert(
    "Бегите!Бегите!у него Цвайхандер!он Ландскнехт! - Первый Неизвесный Крестиьянин"
  );
  alert(
    "Цвайхандер изобрели позже! Ландскнехты Тоже! Императору Максимилиану всего 2 года! - Второй Неизвесный Крестиьянин"
  );
  alert(
    "о, у вас есть: мельница, цеп, два топора! Богата Община! Уродился урожай в Ноттингемшире! - Генри из Кентербери"
  );
  alert(
    "Ага Счас! нет, Это Урожая Джона Де Морубея! на этих землях Барщину Мы Здаем ему! - Первый Неизвесный Крестиьянин"
  );
  alert(
    "Говорил дед мне, что отец разказывал о Голоде в год 1315 и по 1317 шел этот голод - Первый Неизвесный Крестиьянин"
  );
  alert(
    "мы надеемся на Победу Короля! Джон Тот еще Йоркист! Говорят Король Хорош, а Феодалы Плохие! если проиграет Йорки, то и Территории передут Королю! - Второй Неизвесный Крестиьянин"
  );
  alert(
    "** Скочат Всадники **\n" +
      "Мой Земельный Надел в Ноттингемшире Потвержден Королем Эдуардом IV Йорков! Мои Крестьяне! - Джон Де Морубей, Герцог Норфолк"
  );
  const FINAL = prompt(
    "1. ухожу в Лес\n" + "2. Герцог, я Вызываю вас на Поединок!"
  );
  if (FINAL == "1") {
    alert(
      "КОНЕЦ\n" +
        "Генри По Лесам Добрался до Кентербери, и Умер Там Не Оставив Наследников"
    );
  } else if (FINAL == "2") {
    alert(
      "Мысли Герцога: Что За Скот Вызавает Меня на Поединок! Я Убью Его! но не как Противника, а КАК МЯТЕЖНИКА ПРОТИВ ВОЛИ КОРОЛЯ!"
    );
    alert("Я Убью Тебя! - Герцог Норфолк");
    alert("** Крестияьне Убивают Цепами Герцога **");
    alert("Атака Кавалерии Норфолка...");
    if (spear == true) {
      alert("Копья! - Генри из Кентербери");
      alert("Смотрит на Копье: 'Турнир в Уолдене 1461 год'");
      alert("** Страх Креситьян **");
      alert("МЫ ПОБЕДИМ! - Генри из Кентербери");
      alert("CHARGE! - Некий Оруженосец");
      alert("КОНЕЦ\n" + "Генри Сделал Выбор, и Победил");
    } else {
      alert("КОНЕЦ\n" + "Генри Сделал Выбор, и Умер Героической Смертью");
    }
  }
}

const playerName = prompt("Введите ваше имя, фехтовальщик:");

if (playerName) {
  alert(`Добро пожаловать, ${playerName}! Приготовьтесь к бою!`);
} else {
  alert("Вы отказались назвать имя. Манекен не впечатлён...");
}

checkDefendingLater();

function checkDefendingLater() {
  setTimeout(() => {
    if (isDefending === true && Won === false) {
      console.log("Стрела Отбита");
      isDefending = false;
      checkDefendingLater();
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

function canAttackOrDefend(ctrlRequired, positionsAllowed, directionKey) {
  return (
    event.ctrlKey === ctrlRequired &&
    positionsAllowed.includes(position) &&
    distance === 0 &&
    directionKey
  );
}

function maneken() {
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
    }

    // Проверка атаки для разных позиций
    if (canAttackOrDefend(true, 1, isDirectionKey(event.key))) {
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
    if (canAttackOrDefend(true, 2, isDirectionKey(event.key))) {
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
    if (isShiftPressed && position !== 0 && isDirectionKey(event.key)) {
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
}
