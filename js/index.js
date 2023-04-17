// Dark and Light Mode Btns
const darkBtn = document.getElementById("dark");
const bodyEl = document.querySelector("body");

// Check if dark mode is enabled
const isDarkMode = localStorage.getItem("darkMode") === "true";
if (isDarkMode) {
  bodyEl.classList.add("dark");
  darkBtn.textContent = "Light Mode";
  darkBtn.style.backgroundColor = "#fff";
  darkBtn.style.color = "#292c35";
}

// Toggle between light and dark mode
darkBtn.addEventListener("click", () => {
  const isCurrentlyDark = bodyEl.classList.contains("dark");
  if (isCurrentlyDark) {
    bodyEl.classList.remove("dark");
    darkBtn.innerText = "Dark Mode";
    localStorage.setItem("darkMode", "false");
    darkBtn.textContent = "Dark Mode";
    darkBtn.style.backgroundColor = "#292c35";
    darkBtn.style.color = "#fff";
  } else {
    bodyEl.classList.add("dark");
    darkBtn.innerText = "Light Mode";
    localStorage.setItem("darkMode", "true");
    darkBtn.textContent = "Light Mode";
    darkBtn.style.backgroundColor = "#fff";
    darkBtn.style.color = "#292c35";
  }
});
