function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector("#boxes");
const createBoxesBtn = document.querySelector("[data-create]");
const destroyBoxesBtn = document.querySelector("[data-destroy]");
const amountInput = document.querySelector("#controls > input");

createBoxesBtn.addEventListener("click", () => {
  createBoxes(amountInput.value);
});

destroyBoxesBtn.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  if (amount > 100) return;
  amountInput.value = "";
  let boxSize = 30;
  let divsList = "";
  for (let i = 0; i < amount; i++) {
    divsList += `<div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
    boxSize += 10;
  }
  boxesContainer.innerHTML = divsList;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
