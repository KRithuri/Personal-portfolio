// Toggle style switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

//function to open colors
styleSwitcherToggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})