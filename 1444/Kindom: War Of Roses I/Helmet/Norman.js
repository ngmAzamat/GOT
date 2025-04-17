let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let pi = Math.PI;
context.lineWidth = 5;
context.strokeStyle = "black";
context.fillStyle = "grey";
context.arc(150, 100, 75, 0, pi, true);
context.stroke();
context.fill();

context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.moveTo(73, 100);
context.lineTo(227, 100);
context.stroke();

context.beginPath();
context.fillStyle = "grey";
context.fillRect(145, 101.25, 10, 25);
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();
context.fill();
