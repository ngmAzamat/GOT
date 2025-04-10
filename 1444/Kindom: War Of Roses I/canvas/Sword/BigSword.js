let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let pi = Math.PI;

context.beginPath();
context.moveTo(200, 110);
context.lineTo(700, 110);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200, 140);
context.lineTo(700, 140);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200, 125);
context.lineTo(800, 125);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(700, 110);
context.lineTo(800, 125);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(700, 140);
context.lineTo(800, 125);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200, 100);
context.lineTo(200, 150);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200, 75);
context.lineTo(200, 175);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(200, 75);
context.lineTo(200, 175);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.rect(22, 120, 173, 10);
context.stroke();
context.fillStyle = "brown";
context.closePath();
context.fill();

context.beginPath();
context.lineWidth = 5;
context.strokeStyle = "black";
context.lineCap = "butt";
context.fillStyle = "yellow";
context.arc(20, 125, 10, 0, 2 * pi, false);
context.closePath();
context.stroke();
context.fill();
