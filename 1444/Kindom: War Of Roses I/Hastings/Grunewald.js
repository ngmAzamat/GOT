const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const flags = {
  poland: new Image(),
  lithuania: new Image(),
  teutonic: new Image(),
};

flags.poland.src = "КоролевствоПольское.svg";
flags.lithuania.src = "ВеликоеКняжествоЛитовское.svg";
flags.teutonic.src = "ТевтонскийОрден.svg";

// Ждём, пока все флаги загрузятся
let flagsLoaded = 0;
for (let key in flags) {
  flags[key].onload = () => {
    flagsLoaded++;
    if (flagsLoaded === Object.keys(flags).length) {
      animate(); // Запуск анимации после загрузки всех флагов
    }
  };
}

class Unit {
  constructor(x, y, rotate, isCavalry, faction) {
    this.x = x;
    this.y = y;
    this.rotate = rotate;
    this.isCavalry = isCavalry;
    this.faction = faction; // 'poland', 'lithuania', 'teutonic'
  }

  draw() {
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.rotate);

    if (this.isCavalry) {
      // Фон
      c.beginPath();
      c.arc(0, 0, 25, 0, Math.PI * 2);
      c.fillStyle = "white";
      c.fill();

      // Маска (clip)
      c.beginPath();
      c.arc(0, 0, 25, 0, Math.PI * 2);
      c.clip();

      // Флаг
      if (flags[this.faction]) {
        c.drawImage(flags[this.faction], -20, -20, 40, 40);
      }

      // Обводка
      c.beginPath();
      c.arc(0, 0, 25, 0, Math.PI * 2);
      c.strokeStyle = "black";
      c.lineWidth = 2;
      c.stroke();
    } else {
      // Фон
      c.beginPath();
      c.rect(-25, -25, 50, 50);
      c.fillStyle = "white";
      c.fill();

      // Маска (clip)
      c.beginPath();
      c.rect(-25, -25, 50, 50);
      c.clip();

      // Флаг
      if (flags[this.faction]) {
        c.drawImage(flags[this.faction], -20, -20, 40, 40);
      }

      // Обводка
      c.beginPath();
      c.rect(-25, -25, 50, 50);
      c.strokeStyle = "black";
      c.lineWidth = 2;
      c.stroke();
    }

    c.restore();
  }
}

// === Литовцы (верх справа) ===
let Lithuania1 = new Unit(canvas.width - 340, 100, 0, true, "lithuania");
let Lithuania2 = new Unit(canvas.width - 340, 170, 0, true, "lithuania");
let Lithuania3 = new Unit(canvas.width - 340, 240, 0, true, "lithuania");
let Lithuania4 = new Unit(canvas.width - 340, 310, 0, true, "lithuania");
let Lithuania5 = new Unit(canvas.width - 340, 380, 0, true, "lithuania");

let Lithuania6 = new Unit(canvas.width - 270, 100, 0, true, "lithuania");
let Lithuania7 = new Unit(canvas.width - 270, 170, 0, true, "lithuania");
let Lithuania8 = new Unit(canvas.width - 270, 240, 0, true, "lithuania");
let Lithuania9 = new Unit(canvas.width - 270, 310, 0, true, "lithuania");
let Lithuania10 = new Unit(canvas.width - 270, 380, 0, true, "lithuania");

let Lithuania11 = new Unit(canvas.width - 200, 100, 0, true, "lithuania");
let Lithuania12 = new Unit(canvas.width - 200, 170, 0, true, "lithuania");
let Lithuania13 = new Unit(canvas.width - 200, 240, 0, true, "lithuania");
let Lithuania14 = new Unit(canvas.width - 200, 310, 0, true, "lithuania");
let Lithuania15 = new Unit(canvas.width - 200, 380, 0, true, "lithuania");

// === Поляки (низ справа) ===
let Poland1 = new Unit(canvas.width - 340, 450, 0, true, "poland");
let Poland2 = new Unit(canvas.width - 340, 520, 0, true, "poland");
let Poland3 = new Unit(canvas.width - 340, 590, 0, true, "poland");
let Poland4 = new Unit(canvas.width - 340, 660, 0, true, "poland");
let Poland5 = new Unit(canvas.width - 340, 730, 0, true, "poland");

let Poland6 = new Unit(canvas.width - 270, 450, 0, true, "poland");
let Poland7 = new Unit(canvas.width - 270, 520, 0, true, "poland");
let Poland8 = new Unit(canvas.width - 270, 590, 0, true, "poland");
let Poland9 = new Unit(canvas.width - 270, 660, 0, true, "poland");
let Poland10 = new Unit(canvas.width - 270, 730, 0, true, "poland");

let Poland11 = new Unit(canvas.width - 200, 450, 0, true, "poland");
let Poland12 = new Unit(canvas.width - 200, 520, 0, true, "poland");
let Poland13 = new Unit(canvas.width - 200, 590, 0, true, "poland");
let Poland14 = new Unit(canvas.width - 200, 660, 0, true, "poland");
let Poland15 = new Unit(canvas.width - 200, 730, 0, true, "poland");

// === Тевтонцы (слева) ===
// === Тевтонская кавалерия (левая колонна, 10 юнитов) ===
let TeutonicCav1 = new Unit(100, 100, Math.PI, true, "teutonic");
let TeutonicCav2 = new Unit(100, 160, Math.PI, true, "teutonic");
let TeutonicCav3 = new Unit(100, 220, Math.PI, true, "teutonic");
let TeutonicCav4 = new Unit(100, 280, Math.PI, true, "teutonic");
let TeutonicCav5 = new Unit(100, 340, Math.PI, true, "teutonic");
let TeutonicCav6 = new Unit(100, 400, Math.PI, true, "teutonic");
let TeutonicCav7 = new Unit(100, 460, Math.PI, true, "teutonic");
let TeutonicCav8 = new Unit(100, 520, Math.PI, true, "teutonic");
let TeutonicCav9 = new Unit(100, 580, Math.PI, true, "teutonic");
let TeutonicCav10 = new Unit(100, 640, Math.PI, true, "teutonic");

// === Тевтонская пехота (правая колонна, 10 юнитов) ===
let TeutonicInf1 = new Unit(170, 100, Math.PI, false, "teutonic");
let TeutonicInf2 = new Unit(170, 160, Math.PI, false, "teutonic");
let TeutonicInf3 = new Unit(170, 220, Math.PI, false, "teutonic");
let TeutonicInf4 = new Unit(170, 280, Math.PI, false, "teutonic");
let TeutonicInf5 = new Unit(170, 340, Math.PI, false, "teutonic");
let TeutonicInf6 = new Unit(170, 400, Math.PI, false, "teutonic");
let TeutonicInf7 = new Unit(170, 460, Math.PI, false, "teutonic");
let TeutonicInf8 = new Unit(170, 520, Math.PI, false, "teutonic");
let TeutonicInf9 = new Unit(170, 580, Math.PI, false, "teutonic");
let TeutonicInf10 = new Unit(170, 640, Math.PI, false, "teutonic");

const units = [
  // Литовцы
  Lithuania1,
  Lithuania2,
  Lithuania3,
  Lithuania4,
  Lithuania5,
  Lithuania6,
  Lithuania7,
  Lithuania8,
  Lithuania9,
  Lithuania10,
  Lithuania11,
  Lithuania12,
  Lithuania13,
  Lithuania14,
  Lithuania15,
  // Поляки
  Poland1,
  Poland2,
  Poland3,
  Poland4,
  Poland5,
  Poland6,
  Poland7,
  Poland8,
  Poland9,
  Poland10,
  Poland11,
  Poland12,
  Poland13,
  Poland14,
  Poland15,
  // Тевтонцы
  TeutonicCav1,
  TeutonicCav2,
  TeutonicCav3,
  TeutonicCav4,
  TeutonicCav5,
  TeutonicCav6,
  TeutonicCav7,
  TeutonicCav8,
  TeutonicCav9,
  TeutonicCav10,
  TeutonicInf1,
  TeutonicInf2,
  TeutonicInf3,
  TeutonicInf4,
  TeutonicInf5,
  TeutonicInf6,
  TeutonicInf7,
  TeutonicInf8,
  TeutonicInf9,
  TeutonicInf10,
];

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let unit of units) {
    unit.draw();
  }
}

animate();
