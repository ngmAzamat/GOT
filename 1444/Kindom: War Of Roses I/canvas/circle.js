let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let pi = Math.PI;
context.lineWidth = 5;
context.strokeStyle = "red";
context.fillStyle = "yellow";
context.arc(150, 100, 75, 0, 2 * pi, false);
context.stroke();
context.fill();
