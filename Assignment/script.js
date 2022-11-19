const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".nav-bar");
hamburger.addEventListener("click", () => navbar.classList.toggle("active"));

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
  } else {
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0.2)";
  }
}
