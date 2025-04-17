let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

context.fillStyle = "grey";
context.fillRect(100, 50, 100, 125);
context.beginPath();
context.rect(100, 50, 100, 125);
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();

context.fillStyle = "white";
context.fillRect(110, 112.5, 35, 5);
context.beginPath();
context.rect(110, 112.5, 35, 5);
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();

context.fillStyle = "white";
context.fillRect(155, 112.5, 35, 5);
context.beginPath();
context.rect(155, 112.5, 35, 5);
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();
