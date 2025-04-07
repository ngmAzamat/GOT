document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      console.log("Вперёд");
      break;
    case "a":
      console.log("Влево");
      break;
    case "s":
      console.log("Назад");
      break;
    case "d":
      console.log("Вправо");
      break;
    default:
      console.log(`Нажата другая клавиша: ${event.key}`);
      break;
  }
});
