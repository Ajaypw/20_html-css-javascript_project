const containerEl = document.querySelector(".container");
for (let i = 0; i < 30; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorContainerElss = document.querySelectorAll(".color-container");
generateColors();
function generateColors() {
  colorContainerElss.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}
function randomColor() {
  const char = "0123456789abcdef";
  const colorCodeLenght = 6;
  let colorCode = "";
  for (let i = 0; i < colorCodeLenght; i++) {
    const randomNum = Math.floor(Math.random() * char.length);
    colorCode += char.substring(randomNum, randomNum + 1);
  }

  return colorCode;
}
