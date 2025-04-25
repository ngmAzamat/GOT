const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2,
};

const colors = ["#2185C5", "#7ECEFD", "#FFF6E5", "#FF7F66"];

// Event Listeners
addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

addEventListener("resize", () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  init();
});

function getDistance(x1, y1, x2, y2, r1, r2) {
  let xDistance = Math.abs(x1 - x2);
  let yDistance = Math.abs(y1 - y2);
  let C = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  let D = C - r1 - r2;
  return D;
}

// Objects
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
let circle1;
let circle2;
function init() {
  // objects = [];
  circle1 = new Circle(300, 300, 100, "black");
  circle2 = new Circle(10, 10, 30, "red");

  // for (let i = 0; i < 400; i++) {
  //   // objects.push()
  // }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  circle1.update();
  circle2.x = mouse.x;
  circle2.y = mouse.y;
  circle2.update();
  if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y, 100, 30) < 0) {
    circle1.color = "red";
  } else {
    circle1.color = "black";
  }

  console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y, 30, 100));

  // c.fillText("HTML CANVAS BOILERPLATE", mouse.x, mouse.y);
  // objects.forEach(object => {
  //  object.update()
  // })
}

init();
animate();
