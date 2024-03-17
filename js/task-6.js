function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
/*
const boxesList = document.querySelector("#boxes");
const input = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]")

function createBoxes(amount) {
  const boxes = [];
 
  for (let i = 0; i <= amount; i++) {
    const box = document.createElement("div")

    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxesList.append(...boxes);

}

function destroyBoxes() {
  boxesList.innerHTML = '';
}

function createMarkup() {
  const amount = Number(input.value);
  if (amount < 1 && amount > 100) {
    console.log("error");
    return;
  }

  createBoxes(amount);
}

createBtn.addEventListener("click", createMarkup);
destroyBtn.addEventListener("click", destroyBoxes);
*/