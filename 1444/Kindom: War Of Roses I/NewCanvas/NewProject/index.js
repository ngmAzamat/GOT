// Learn to code this at:
// https://www.youtube.com/watch?v=3b7FyIxWW94

// Initial Setup
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Variables
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

const gravity = 2;
const friction = 0.98;

// Event Listeners
window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

window.addEventListener("click", () => {
  init();
});

// Utility Functions
const randomIntFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = (colorArray) =>
  colorArray[Math.floor(Math.random() * colorArray.length)];

// Ball Class
class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
  }

  update() {
    // Bounce off bottom
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
      this.dx *= friction;
    } else {
      this.dy += gravity;
    }

    // Bounce off sides
    if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
      this.dx = -this.dx * friction;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// Implementation
let ballArray = [];

function init() {
  ballArray = [];

  for (let i = 0; i < 600; i++) {
    const radius = randomIntFromRange(8, 20);
    const x = randomIntFromRange(radius, canvas.width - radius);
    const y = randomIntFromRange(0, canvas.height - radius);
    const dx = randomIntFromRange(-3, 3);
    const dy = randomIntFromRange(-2, 2);
    const color = randomColor(colors);
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (const ball of ballArray) {
    ball.update();
  }
}

init();
animate();
