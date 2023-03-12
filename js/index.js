
// Dark and Light Mode Btns
const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");
const bodyEl = document.querySelector("body");

darkBtn.addEventListener("click", darkMode);
lightBtn.addEventListener("click", lightMode);

function darkMode() {
  bodyEl.classList.add("dark");
}

function lightMode() {
  bodyEl.classList.remove("dark");
}

