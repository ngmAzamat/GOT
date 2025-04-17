const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.strokeStyle = "blue";
    context.stroke();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy *= -1;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

const circleArray = [];

for (let i = 0; i < 100; i++) {
  const radius = 30;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 8;
  const dy = (Math.random() - 0.5) * 8;
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  for (const circle of circleArray) {
    circle.update();
  }
  requestAnimationFrame(animate);
}

animate();
