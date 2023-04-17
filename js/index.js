// Dark and Light Mode Btns
const darkBtn = document.getElementById("dark");
const lightBtn = document.getElementById("light");
const bodyEl = document.querySelector("body");

// Check if dark mode is enabled
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  bodyEl.classList.add("dark");
}

// Toggle between light and dark mode
darkBtn.addEventListener("click", () => {
  const isCurrentlyDark = bodyEl.classList.contains("dark");
  if (isCurrentlyDark) {
    bodyEl.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
  } else {
    bodyEl.classList.add("dark");
    localStorage.setItem("darkMode", "true");
  }
});
