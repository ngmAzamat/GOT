let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let m = 30,
  n = 30;
let mas = [];
let mas2 = [];
let count = 0;
let isRunning = false;
let interval = null;

canvas.onclick = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);
  mas[y][x] = 1;
  drawField();
};

function goLife() {
  for (let i = 0; i < m; i++) {
    mas[i] = [];
    for (let j = 0; j < n; j++) {
      mas[i][j] = 0;
    }
  }
}
goLife();

function drawField() {
  context.clearRect(0, 0, 300, 300);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mas[i][j] == 1) {
        context.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

function startLife() {
  mas2 = [];
  for (let i = 0; i < m; i++) {
    mas2[i] = [];
    for (let j = 0; j < n; j++) {
      let neighbors = 0;
      if (mas[fpm(i)][j] == 1) neighbors++;
      if (mas[fpp(i)][j] == 1) neighbors++;
      if (mas[i][fpm(j)] == 1) neighbors++;
      if (mas[i][fpp(j)] == 1) neighbors++;
      if (mas[fpm(i)][fpm(j)] == 1) neighbors++;
      if (mas[fpm(i)][fpp(j)] == 1) neighbors++;
      if (mas[fpp(i)][fpm(j)] == 1) neighbors++;
      if (mas[fpp(i)][fpp(j)] == 1) neighbors++;

      if (mas[i][j] == 1) {
        mas2[i][j] = neighbors == 2 || neighbors == 3 ? 1 : 0;
      } else {
        mas2[i][j] = neighbors == 3 ? 1 : 0;
      }
    }
  }
  mas = mas2.map((arr) => arr.slice());
  drawField();
  count++;
  document.getElementById("count").innerHTML = count;
}

function fpm(i) {
  return (i - 1 + m) % m;
}

function fpp(i) {
  return (i + 1) % m;
}

// ⛔ Убери лишний setInterval
// setInterval(startLife, 200); // <-- не нужен!

// ✅ Управление запуском/паузы
document.getElementById("startBtn").onclick = function () {
  if (isRunning) {
    clearInterval(interval);
    isRunning = false;
  } else {
    interval = setInterval(startLife, 200);
    isRunning = true;
  }
};

// ✅ Кнопка "Очистить"
document.getElementById("clearBtn").onclick = function () {
  goLife();
  drawField();
  count = 0;
  document.getElementById("count").innerHTML = count;
};
