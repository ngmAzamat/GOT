const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const context = canvas.getContext("2d");

const minRadius = 2;
const maxRadius = 40;
const colorArray = ["#2C3E50", "#E74C3C", "#ECF1F0", "#3498D8", "#298889"];

const mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

class Circle {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.baseRadius = radius;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
  }

  update() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy *= -1;
    }

    const isNearMouse =
      mouse.x &&
      mouse.y &&
      Math.abs(mouse.x - this.x) < 50 &&
      Math.abs(mouse.y - this.y) < 50;

    if (isNearMouse && this.radius < maxRadius) {
      this.radius += 1;
    } else if (!isNearMouse && this.radius > this.baseRadius) {
      this.radius -= 1;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

const circleArray = [];

for (let i = 0; i < 800; i++) {
  const radius = Math.random() * 3 + 1;
  const x = Math.random() * (canvas.width - radius * 2) + radius;
  const y = Math.random() * (canvas.height - radius * 2) + radius;
  const dx = (Math.random() - 0.5) * 4;
  const dy = (Math.random() - 0.5) * 4;
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
