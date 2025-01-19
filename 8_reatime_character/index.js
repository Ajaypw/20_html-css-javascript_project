const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("Remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();
function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText = textareaEl.maxLength - textareaEl.value.length;
  textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}
