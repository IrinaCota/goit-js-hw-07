function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesArr = document.getElementById("boxes");
  boxesArr.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");

    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesArr.appendChild(box);
  }
}

const input = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", function () {
  const amount = parseInt(input.value);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Error");
  }
});

function destroyBoxes() {
  boxes.innerHTML = "";
}
destroyBtn.addEventListener("click", destroyBoxes);
