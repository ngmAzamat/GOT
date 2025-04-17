let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let pi = Math.PI;

context.lineWidth = 5;
context.strokeStyle = "black";
context.fillStyle = "grey";

// Верхняя полусфера (голова)
context.beginPath();
context.arc(150, 100, 75, 0, pi, true);
context.stroke();
context.fill();

// === "Воротник" — прямоугольник под полусферой ===
context.beginPath();
context.rect(75, 100, 150, 80); // увеличена высота
context.fillStyle = "grey";
context.fill();

// Обводка только по бокам и снизу
context.beginPath();
context.moveTo(75, 100); // верхний левый угол (не рисуем вверх)
context.lineTo(75, 180); // вниз по левому краю
context.lineTo(225, 180); // вправо по низу
context.lineTo(225, 100); // вверх по правому краю
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();

// === ЗАБРАЛО, смотрящее вправо (гранд бацинет) ===
let dx = 60;
let dy = -35;

context.beginPath();

// Круг — забрало
context.arc(145 + dx, 140 + dy, 50, Math.PI * 2, false);

context.closePath();
context.fillStyle = "grey";
context.fill();
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();

// === Щель для глаз ===
context.beginPath();
context.moveTo(175 + 40, 130 - 30);
context.lineTo(200 + 40, 135 - 30);
context.lineTo(200 + 40, 140 - 30);
context.lineTo(175 + 40, 135 - 30);
context.closePath();

context.fillStyle = "black";
context.fill();
