const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class England {
  constructor(x, y, rotate, isKavalery) {
    this.x = x;
    this.y = y;
    this.rotate = rotate; // в радианах
    this.isKavalery = isKavalery;
    this.color = "red";
  }

  draw() {
    c.save(); // Сохраняем состояние
    c.translate(this.x, this.y); // Переносим центр координат в x, y
    c.rotate(this.rotate); // Поворачиваем систему координат

    c.fillStyle = this.color;

    if (this.isKavalery === true) {
      // Кавалерия — круг (центрирован)
      c.beginPath();
      c.arc(0, 0, 25, 0, Math.PI * 2);
      c.fill();
      c.closePath();
    } else {
      // Пехота — квадрат (центрирован)
      c.fillRect(-25, -25, 50, 50);
    }

    c.restore(); // Возвращаем исходное состояние
  }
}

class Norman {
  constructor(x, y, rotate, isKavalery) {
    this.x = x;
    this.y = y;
    this.rotate = rotate; // в радианах
    this.isKavalery = isKavalery;
    this.color = "blue";
  }

  draw() {
    c.save(); // Сохраняем состояние
    c.translate(this.x, this.y); // Переносим центр координат в x, y
    c.rotate(this.rotate); // Поворачиваем систему координат

    c.fillStyle = this.color;

    if (this.isKavalery === true) {
      // Кавалерия — круг (центрирован)
      c.beginPath();
      c.arc(0, 0, 25, 0, Math.PI * 2);
      c.fill();
      c.closePath();
    } else {
      // Пехота — квадрат (центрирован)
      c.fillRect(-25, -25, 50, 50);
    }

    c.restore(); // Возвращаем исходное состояние
  }
}

NormanKavalery1 = new Norman(125, 525, 0, true);
NormanKavalery2 = new Norman(200, 525, 0, true);
NormanKavalery3 = new Norman(275, 525, 0, true);
NormanKavalery4 = new Norman(350, 525, 0, true);
NormanKavalery5 = new Norman(425, 525, 0, true);

NormanKavalery6 = new Norman(500, 525, 0, true);
NormanKavalery7 = new Norman(575, 525, 0, true);
NormanKavalery8 = new Norman(650, 525, 0, true);
NormanKavalery9 = new Norman(725, 525, 0, true);
NormanKavalery10 = new Norman(800, 525, 0, true);

NormanKavalery11 = new Norman(875, 525, 0, true);
NormanKavalery12 = new Norman(950, 525, 0, true);
NormanKavalery13 = new Norman(1025, 525, 0, true);
NormanKavalery14 = new Norman(1100, 525, 0, true);
NormanKavalery15 = new Norman(1175, 525, 0, true);

NormanKavalery16 = new Norman(1250, 525, 0, true);

Norman1 = new Norman(275, 600, 0, false);
Norman2 = new Norman(350, 600, 0, false);
Norman3 = new Norman(425, 600, 0, false);
Norman4 = new Norman(500, 600, 0, false);
Norman5 = new Norman(575, 600, 0, false);

Norman6 = new Norman(650, 600, 0, false);
Norman7 = new Norman(725, 600, 0, false);
Norman8 = new Norman(800, 600, 0, false);
Norman9 = new Norman(875, 600, 0, false);
Norman10 = new Norman(950, 600, 0, false);

England1 = new England(275, 200, 0, false);
England2 = new England(350, 200, 0, false);
England3 = new England(425, 200, 0, false);
England4 = new England(500, 200, 0, false);
England5 = new England(575, 200, 0, false);

England6 = new England(650, 200, 0, false);
England7 = new England(725, 200, 0, false);
England8 = new England(800, 200, 0, false);
England9 = new England(875, 200, 0, false);
England10 = new England(950, 200, 0, false);

England11 = new England(275, 275, 0, false);
England12 = new England(350, 275, 0, false);
England13 = new England(425, 275, 0, false);
England14 = new England(500, 275, 0, false);
England15 = new England(575, 275, 0, false);

England16 = new England(650, 275, 0, false);
England17 = new England(725, 275, 0, false);
England18 = new England(800, 275, 0, false);
England19 = new England(875, 275, 0, false);
England20 = new England(950, 275, 0, false);

England21 = new England(620, 125, 0, false);

// Соберём всех юнитов в массив
const units = [
  NormanKavalery1,
  NormanKavalery2,
  NormanKavalery3,
  NormanKavalery4,
  NormanKavalery5,
  NormanKavalery6,
  NormanKavalery7,
  NormanKavalery8,
  NormanKavalery9,
  NormanKavalery10,
  NormanKavalery11,
  NormanKavalery12,
  NormanKavalery13,
  NormanKavalery14,
  NormanKavalery15,
  NormanKavalery16,
  Norman1,
  Norman2,
  Norman3,
  Norman4,
  Norman5,
  Norman6,
  Norman7,
  Norman8,
  Norman9,
  Norman10,
  England1,
  England2,
  England3,
  England4,
  England5,
  England6,
  England7,
  England8,
  England9,
  England10,
  England11,
  England12,
  England13,
  England14,
  England15,
  England16,
  England17,
  England18,
  England19,
  England20,
  England21,
];

// Функция анимации — рисует каждый кадр
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height); // Очищаем холст

  for (let unit of units) {
    unit.draw(); // Отрисовка каждого юнита
  }
}

// Запуск анимации
animate();
