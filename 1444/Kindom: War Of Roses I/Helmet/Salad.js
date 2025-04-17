let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
let pi = Math.PI;

// Купол шлема (серый)
context.lineWidth = 5;
context.strokeStyle = "black";
context.fillStyle = "grey"; // Заливка серым
context.beginPath();
context.arc(200, 100, 75, 0, pi, true); // купол шлема
context.stroke();
context.fill();

// линия внизу
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 5;
context.moveTo(125, 150);
context.lineTo(237, 150);
context.stroke();

// Хвост (не замкнут, заливка серым)
context.beginPath();
context.moveTo(125, 150);
context.lineTo(50, 150);
context.lineTo(125, 100);
context.strokeStyle = "black"; // Обводка хвоста
context.lineWidth = 5;
context.stroke(); // рисуем обводку

context.fillStyle = "grey"; // Заливка хвоста серым
context.fill();

// Горжет (серый)
context.beginPath();
context.rect(125, 100, 150, 50); // прямоугольник для горжета (зона шлема)
context.fillStyle = "grey"; // цвет заливки
context.fill();

// Забрало (заливка)
context.beginPath();
context.fillStyle = "grey"; // Заливка забрала серым цветом
context.moveTo(275, 100); // левая точка забрала
context.lineTo(300, 100); // верхняя линия забрала
context.lineTo(300, 150); // правая точка забрала
context.lineTo(237.5, 150); // нижняя линия забрала
context.lineTo(225, 100); // возвращаемся к верхней точке
context.closePath();
context.fill(); // Заливаем забрало серым цветом

context.lineWidth = 2.5;
context.strokeStyle = "black";
context.stroke(); // Обводим забрало

// Щель для Глаз
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 2.5;
context.moveTo(275, 120);
context.lineTo(300, 120);
context.stroke();
