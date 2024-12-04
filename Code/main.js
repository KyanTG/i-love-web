



const openButton = document.querySelector(".hamburger");

openButton.addEventListener("click", openMenu);


function openMenu() {  

  const deNav = document.querySelector("nav");

  deNav.classList.toggle("nav-open");
  
  document.body.classList.toggle('hamburger-open'); }

const sluitButton = document.querySelector(".hamburger-open");

