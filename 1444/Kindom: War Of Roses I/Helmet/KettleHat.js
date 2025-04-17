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

// линия внизу (нижняя часть шлема)
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 5;
context.moveTo(125, 150);
context.lineTo(325, 150);
context.stroke();

// Хвост (не замкнут, заливка серым) — первый хвост слева
context.beginPath();
context.moveTo(125, 150);
context.lineTo(50, 150);
context.lineTo(125, 100);
context.strokeStyle = "black"; // Обводка хвоста
context.lineWidth = 5;
context.stroke(); // рисуем обводку
context.fillStyle = "grey"; // Заливка хвоста серым
context.fill();

// Поле справа (отзеркаленное) — зеркальное отражение хвоста, сдвинутое вправо
context.beginPath();
context.moveTo(275, 150); // нижняя правая точка сдвинута на 50 пикселей влево
context.lineTo(350, 150); // отходит вправо
context.lineTo(275, 100); // поднимается вверх
context.strokeStyle = "black"; // Обводка поля
context.lineWidth = 5;
context.stroke(); // рисуем обводку
context.fillStyle = "grey"; // Заливка поля серым
context.fill();

// Горжет (серый) — нижняя часть шлема, сдвинута на 50 пикселей вверх
context.beginPath();
context.rect(125, 100, 150, 50); // прямоугольник для горжета
context.fillStyle = "grey"; // цвет заливки
context.fill();
