const dropdown = document.querySelectorAll(".dropdown");

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// menu hamburger

const navigation = document.querySelector("#navbar");
const menuHamburger = document.querySelector(".menu-hamburger");

menuHamburger.addEventListener("click", () => {
  const visability = navigation.getAttribute("data-visible");
  if (visability === "false") {
    navigation.setAttribute("data-visible", true);
    menuHamburger.setAttribute("aria-expanded", true);
  } else if (visability === "true") {
    navigation.setAttribute("data-visible", false);
    menuHamburger.setAttribute("aria-expanded", false);
  }
});

// scroll header

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scroll", this.scrollY > 0);
});
