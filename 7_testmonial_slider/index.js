const testmonial = [
  {
    name: "AJAY SAINI ",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&s",
    text: " LINE1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "DEEPAK YADAV ",
    photoUrl:
      "https://images.unsplash.com/photo-1735796788550-8fa349e8c59f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " LINE2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "KARAN BAGHEL ",
    photoUrl:
      "https://images.unsplash.com/photo-1736131660777-8b7aa6bb0efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "LINE3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "BHANU THAKUR",
    photoUrl:
      "https://images.unsplash.com/photo-1736159427273-189b0e49f19b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: " LINE4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
const imgEl = document.querySelector("img");
const nameEl = document.querySelector(".username");
const textEl = document.querySelector(".text");
let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testmonial[idx];
  imgEl.src = photoUrl;
  nameEl.innerText = name;
  textEl.innerText = text;
  idx++;
  setTimeout(() => {
    if (idx === testmonial.length) {
      idx = 0;
    }
    updateTestimonial();
  }, 2000);
}
