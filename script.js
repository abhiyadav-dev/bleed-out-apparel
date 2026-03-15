document.getElementById("hamburger-btn").addEventListener("click", () => {
  document.querySelector(".ham").classList.add("hamburgerListOpen");
});
document.querySelector(".itemBtn").addEventListener("click", () => {
  document.querySelector(".ham").classList.remove("hamburgerListOpen");
});
