const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayNumberEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");
const myDate = new Date();
const month = myDate.getMonth();
monthName.innerText = myDate.toLocaleString("en", { month: "long" });

dayName.innerText = myDate.toLocaleString("en", { weekday: "long" });
dayNumberEl.innerText = myDate.getDate();
yearEl.innerText = myDate.getFullYear();