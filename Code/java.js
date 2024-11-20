
const openButton = document.querySelector("nav-icon");


openButton.addEventListener("click", openMenu);


function openMenu() {  

  const deNav = document.querySelector("nav");

  deNav.classList.add("toonMenu"); }

const sluitButton = document.querySelector("nav button");


sluitButton.addEventListener("click", sluitMenu);


function sluitMenu() {
  const deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu"); }
