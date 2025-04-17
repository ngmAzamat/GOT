let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let pi = Math.PI;

context.lineWidth = 5;
context.strokeStyle = "black";
context.fillStyle = "grey"; // Заливка для шлема

// Верхняя полусфера (голова шлема)
context.beginPath();
context.arc(150, 100, 75, 0, pi, true); // купол шлема
context.stroke();
context.fill();

// === "Воротник" — прямоугольник под полусферой без границ ===
context.beginPath();
context.rect(75, 100, 150, 40); // прямоугольник для горжета (зона шлема)
context.fillStyle = "grey"; // цвет заливки
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

// === Забрало ===
// Закрытие пути забрала для заливки
context.beginPath();
context.moveTo(225, 100); // левая точка забрала
context.lineTo(250, 100); // верхняя линия забрала
context.lineTo(237.5, 140); // диагональ вниз
context.lineTo(225, 140); // обратно к нижнему левому краю забрала
context.closePath(); // Закрываем путь забрала

// Заливка забрала
context.fillStyle = "grey"; // цвет заливки
context.fill();

// Обводка забрала
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.stroke();

// === Щель для глаз ===
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.moveTo(210, 90); // левая точка щели
context.lineTo(224, 85); // правая точка щели
context.stroke();
