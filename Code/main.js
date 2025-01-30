
// Hamburger menu

const openButton = document.querySelector(".hamburger");

openButton.addEventListener("click", openMenu);


function openMenu() {  

  const deNav = document.querySelector("nav");

  deNav.classList.toggle("nav-open");
  
  document.body.classList.toggle('hamburger-open'); }

const sluitButton = document.querySelector(".hamburger-open");


// Voortgangs pagina divjes bij click info laten zien

const ShowMore = document.querySelector(".show-more");

ShowMore.addEventListener("click", ShowText);

function ShowText() {
  const InfoDiv = document.querySelector(".show-more-article");
  InfoDiv.classList.toggle("div-show-p");
}