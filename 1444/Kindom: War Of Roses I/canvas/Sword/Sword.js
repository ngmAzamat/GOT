let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let pi = Math.PI;

context.beginPath();
context.moveTo(100, 110);
context.lineTo(500, 110);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(100, 140);
context.lineTo(500, 140);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(100, 125);
context.lineTo(600, 125);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(500, 110);
context.lineTo(600, 125);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(500, 140);
context.lineTo(600, 125);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 150);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(100, 75);
context.lineTo(100, 175);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.moveTo(100, 75);
context.lineTo(100, 175);
context.lineWidth = "5";
context.lineCap = "butt";
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.rect(22, 120, 78, 10);
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
