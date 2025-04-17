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

// === "Воротник" — прямоугольник под полусферой без границ ===
// === Горжет: заливка ===
context.beginPath();
context.rect(75, 100, 150, 40); // прямоугольник
context.fillStyle = "grey";
context.fill();

// === Горжет: обводка без верхней линии ===
context.beginPath();
context.moveTo(75, 100); // верхний левый угол (не рисуем вверх)
context.lineTo(75, 140); // вниз по левому краю
context.lineTo(225, 140); // вправо по низу
context.lineTo(225, 100); // вверх по правому краю
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();

// === ЗАБРАЛО (весь многоугольник сдвинут) ===
let dx = 60;
let dy = -35;

context.beginPath();
context.moveTo(100 + dx, 200 + dy); // затылок
context.lineTo(130 + dx, 120 + dy); // верх купола
context.lineTo(200 + dx, 150 + dy); // верх забрала
context.lineTo(240 + dx, 180 + dy); // конец "клюва"
context.lineTo(200 + dx, 190 + dy); // низ "клюва"
context.lineTo(160 + dx, 190 + dy); // низ шлема
context.lineTo(130 + dx, 220 + dy); // затылок (низ)
context.closePath();

// Заливка и обводка
context.fillStyle = "grey";
context.fill();
context.strokeStyle = "black";
context.lineWidth = 2;
context.stroke();

// === Щель для глаз (сдвигается на те же dx/dy) ===
context.beginPath();
context.moveTo(180 + dx, 160 + dy);
context.lineTo(210 + dx, 165 + dy);
context.lineTo(210 + dx, 170 + dy);
context.lineTo(180 + dx, 165 + dy);
context.closePath();
context.fillStyle = "black";
context.fill();
