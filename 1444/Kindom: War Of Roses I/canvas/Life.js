let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let mas = [];
let timer;

canvas.onclick = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  console.log(x);
  console.log(y);
  x = Math.floor(x / 10);
  y = Math.floor(y / 10);

  console.log(mas);
  mas[y][x] = 1;
  drawField();
};

function goLife() {
  let n = 30;
  let m = 30;
  for (let i = 0; i < m; i++) {
    mas[i] = [];
    for (let j = 0; j < m; j++) {
      mas[i][j] = 0;
    }
  }
}
goLife();

function drawField() {
  context.clearRect(0, 0, 300, 300);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (mas[i][j] == 1) {
        context.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}

function startLife() {
  let mas = [];
  for (let i = 0; i < 30; i++) {
    mas[i] = [];
    for (let j = 0; j < 30; j++) {
      let neighbors = 0;
      if (mas[fpm(i) - 1][j] == 1) neighbors++;
      if (mas[i][fpp(j) + 1] == 1) neighbors++;
      if (mas[fpm(i) + 1][j] == 1) neighbors++;
      if (mas[i][fpm(j) - 1] == 1) neighbors++;
      (neighbors == 2 || neighbors == 3) ? mas2[i][j]=1
    }
    mas = mas2
    drawField()
    count++
    document.getElementById("count").innerHTML = count;
  }
}

function fpm(i) {
  if (i == 0) return 30;
  else return i;
}

setInterval(startLife, 200);
