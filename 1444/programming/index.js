const crypto = require("crypto");

function randomIntFromInterval(min, max) {
  return crypto.randomInt(min, max + 1);
}

const rndInt = randomIntFromInterval(1, 6);
// console.log("Случайное число:", rndInt);

// const a1 = process.argv[2];
// console.log("Название Государства:", a1);

// const a2 = process.argv[3];
// console.log("Кем основано:", a2);

const A = process.argv[2];
const B = process.argv[3];
const C = process.argv[4];
console.log(
  "Король:",
  A,
  "Из Рода",
  B,
  ",",
  C,
  "Имени Своево,",
  "Парламент Готов прянять:",
  rndInt,
  "Реформ из 6 предложинных"
);

// const a4 = process.argv[5];
// console.log("Столица и основные города:", a4);

// const a5 = process.argv[6];
// console.log("Главный доход Государства:", a5);

// const a1 = process.argv[2];
// console.log("Название Государства:", a1);

// const a2 = process.argv[3];
// console.log("Кем основано:", a2);

// const a3 = process.argv[4];
// console.log("Текущий правитель:", a3);

// const a4 = process.argv[5];
// console.log("Столица и основные города:", a4);

// const a5 = process.argv[6];
// console.log("Главный доход Государства:", a5);
