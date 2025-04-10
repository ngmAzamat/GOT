let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let x = 0;
let timer;

function drawSin() {
  y = Math.sin(x);
  if (x >= 400) {
    x = 0;
  } else {
    x = x + 0.3;
  }
  context.fillRect(5 * x, 100 + 20 * y, 2, 2);
  timer = setTimeout(drawSin, 50);
}

drawSin();
