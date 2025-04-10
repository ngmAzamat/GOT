let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
// context.fillStyle = "red";
// context.strokeStyle = "green";
// context.moveTo(200, 50);
// context.quadraticCurveTo(150, 0, 100, 50);
// context.stroke();

// context.quadraticCurveTo(50, 150, 200, 180);
// context.quadraticCurveTo(350, 150, 300, 50);
// context.quadraticCurveTo(250, 0, 200, 50);
// context.stroke();
// context.fill();

canvas.onmousemove = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  context.clearRect(0, 0, 400, 200);
  context.beginPath();
  context.moveTo(50, 50);
  context.quadraticCurveTo(x, y, 50, 150);
  context.stroke();
  context.closePath();
};
