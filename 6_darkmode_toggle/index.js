const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
inputEl.checked = JSON.parse(localStorage.getItem("mode"));
inputEl.checked = false;
updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.backgroundColor = "black";
  } else {
    bodyEl.style.backgroundColor = "white";
  }
}
inputEl.addEventListener("input", () => {
  updateBody();
  updatelocalStorage();
});

function updatelocalStorage() {
  localStorage.setItem("input", JSON.stringify(inputEl.checked));
}
