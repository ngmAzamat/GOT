let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let myColor = "red";

document.getElementById("color").oninput = function () {
  myColor = this.value;
};

canvas.onmousedown = function (event) {
  canvas.onmousemove = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    context.fillStyle = myColor;
    context.fillRect(x - 5, y - 5, 10, 10);
  };
  canvas.onmouseup = function () {
    canvas.onmousemove = null;
  };
};
