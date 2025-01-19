const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
const imageEl = document.querySelector(".image");
btnEl.addEventListener("click", () => {
   imageNum = 10;
  addNewImage();
});

function addNewImage() {
  for (let i = 0; i < imageNum; i++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    imageContainerEl.appendChild(newImgEl);
  }
}
