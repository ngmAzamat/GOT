let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let x = 200;
let y = 100;
let stepCount = 0;
let direction;
let timer;
let myX;
let myY;

function drawDot() {
  context.clearRect(0, 0, 400, 200);
  if (stepCount == 0) {
    stepCount = Math.floor(15 * Math.random());
    direction = Math.floor(8 * Math.random());
  } else {
    stepCount--;
  }
  switch (direction) {
    case 0:
      y = y - 1;
      break;
    case 1:
      x = x + 1;
      break;
    case 2:
      y = y + 1;
      break;
    case 3:
      x = x - 1;
      break;
    case 4:
      x = x + 1;
      y = y - 1;
      break;
    case 5:
      x = x + 1;
      y = y + 1;
      break;
    case 6:
      x = x - 1;
      y = y + 1;
      break;
    case 7:
      x = x - 1;
      y = y - 1;
      break;
  }
  if (x < 0 || x > 400 || y < 0 || y > 200) {
    step = 0;
  }
  context.fillRect(x - 3, y - 3, 6, 6);
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(myX, myY);
  context.stroke();
  timer = setTimeout(drawDot, 100);
}

drawDot();

canvas.onmousemove = function (event) {
  myX = event.offsetX;
  myY = event.offsetY;
};
