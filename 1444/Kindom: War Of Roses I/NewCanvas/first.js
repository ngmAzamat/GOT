const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

context.fillStyle = "rgba(255,0,0,0.5)";
context.fillRect(100, 100, 100, 100);
context.fillStyle = "rgba(0,0,255,0.5)";
context.fillRect(400, 100, 100, 100);
context.fillStyle = "rgba(0,255,0,0.5)";
context.fillRect(300, 300, 100, 100);

console.log(canvas);

context.beginPath();
context.moveTo(50, 300);
context.lineTo(300, 100);
context.lineTo(400, 300);
context.strokeStyle = "#fa34a3";
context.stroke();

context.beginPath();
context.arc(300, 300, 30, 0, Math.PI * 2, false);
context.strokeStyle = "blue";
context.stroke();

for (let i = 0; i < 100; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 2, false);
  context.strokeStyle = "blue";
  context.stroke();
}
