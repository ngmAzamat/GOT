function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let counter = 0;
for (let i = 1; i < 201; i++) {
  let rndInt = randomIntFromInterval(1, 100);
  if (rndInt < 26) {
    counter++;
  }
}

let counter2 = 0;
for (let i = 0; i <= counter; i++) {
  let rndInt = randomIntFromInterval(0, 100);
  if (rndInt < 20) {
    counter2 = counter2 + 1;
  } else if (rndInt < 40) {
    counter2 = counter2 + 2;
  } else if (rndInt < 60) {
    counter2 = counter2 + 3;
  } else if (rndInt < 80) {
    counter2 = counter2 + 4;
  } else {
    counter2 = counter2 + 5;
  }
}

console.log(counter2);
