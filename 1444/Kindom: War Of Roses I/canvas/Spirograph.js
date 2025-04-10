let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");

let R = 150;
let r = 90;
let d = 80;
let teta = 0;
let timer;

function spirio() {
  let x = (R - r) * Math.cos(teta) + d * Math.cos(((R - r) * teta) / r);
  let y = (R - r) * Math.sin(teta) - d * Math.sin(((R - r) * teta) / r);
  teta = teta + 0.1;
  context.fillRect(300 + x, 300 + y, 4, 4);
  timer = setTimeout(spirio, 50);
}

spirio();
