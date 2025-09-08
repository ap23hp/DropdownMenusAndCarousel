// dropdown.js
import "./style.css";

export function initDropdowns() {
  const dropdownDivs = document.querySelectorAll(".dropdown");
  dropdownDivs.forEach((element) => {
    let btn = element.querySelector(".dropdown-btn");
    let menu = element.querySelector(".dropdown-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("visible");
    });
  });
}
