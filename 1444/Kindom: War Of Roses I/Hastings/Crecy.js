const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const flags = {
  france: new Image(),
  england: new Image(),
  genoa: new Image(),
};

flags.england.src = "England.svg";
flags.france.src = "France.svg";
flags.genoa.src = "Genoa.svg";

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
    this.faction = faction; // 'Genoa', 'France', 'England'
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

// === Французы: Тяжелая Кавалерия ===
let France1 = new Unit(100, 500, 0, true, "france");
let France2 = new Unit(160, 500, 0, true, "france");
let France3 = new Unit(220, 500, 0, true, "france");
let France4 = new Unit(280, 500, 0, true, "france");
let France5 = new Unit(340, 500, 0, true, "france");

let France6 = new Unit(400, 500, 0, true, "france");
let France7 = new Unit(460, 500, 0, true, "france");
let France8 = new Unit(520, 500, 0, true, "france");
let France9 = new Unit(580, 500, 0, true, "france");
let France10 = new Unit(640, 500, 0, true, "france");

let France11 = new Unit(700, 500, 0, true, "france");
let France12 = new Unit(760, 500, 0, true, "france");
// === Французы: Пехота и Ополчение ===
let FranceInf11 = new Unit(700, 560, 0, false, "france");
let FranceInf2 = new Unit(160, 560, 0, false, "france");
let FranceInf3 = new Unit(220, 560, 0, false, "france");
let FranceInf4 = new Unit(280, 560, 0, false, "france");
let FranceInf5 = new Unit(340, 560, 0, false, "france");
let FranceInf6 = new Unit(400, 560, 0, false, "france");
let FranceInf7 = new Unit(460, 560, 0, false, "france");
let FranceInf8 = new Unit(520, 560, 0, false, "france");
let FranceInf9 = new Unit(580, 560, 0, false, "france");
let FranceInf10 = new Unit(640, 560, 0, false, "france");

// === Гэнуэзцы: Арбалетчики ===
let Genoa1 = new Unit(400, 440, 0, false, "genoa");
let Genoa2 = new Unit(460, 440, 0, false, "genoa");

// === Англичане: Пехота ===
let England1 = new Unit(100, 170, 0, false, "england");
let England2 = new Unit(160, 170, 0, false, "england");
let England3 = new Unit(220, 170, 0, false, "england");
let England4 = new Unit(280, 170, 0, false, "england");
let England5 = new Unit(340, 170, 0, false, "england");
// === Англичане: Лучники ===
let England6 = new Unit(400, 170, 0, false, "england");
let England7 = new Unit(460, 170, 0, false, "england");
let England8 = new Unit(520, 170, 0, false, "england");
let England9 = new Unit(580, 170, 0, false, "england");
let England10 = new Unit(640, 170, 0, false, "england");

const units = [
  // Французы
  France1,
  France2,
  France3,
  France4,
  France5,
  France6,
  France7,
  France8,
  France9,
  France10,
  France11,
  France12,
  FranceInf2,
  FranceInf3,
  FranceInf4,
  FranceInf5,
  FranceInf6,
  FranceInf7,
  FranceInf8,
  FranceInf9,
  FranceInf10,
  FranceInf11,
  // Наемники
  Genoa1,
  Genoa2,
  // Англичане
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
];

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let unit of units) {
    unit.draw();
  }
}

animate();
