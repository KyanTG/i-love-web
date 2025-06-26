
// Hamburger menu

// const openButton = document.querySelector(".hamburger");

// openButton.addEventListener("click", openMenu);


// function openMenu() {  

//   const deNav = document.querySelector("nav");

//   deNav.classList.toggle("nav-open");
  
//   document.body.classList.toggle('hamburger-open'); }

// const sluitButton = document.querySelector(".hamburger-open");

// hamburger creative

const openB = document.querySelector(".menu");

openB.addEventListener("click", openM);


function openM() {  

  const deN = document.querySelector("nav");

  deN.classList.toggle("nav-open");
  
  document.body.classList.toggle('menu-open'); }

const sluitB = document.querySelector(".menu-open");


// Voortgangs pagina divjes bij click info laten zien


let showMoreArticle = document.querySelectorAll(".show-more-article");

showMoreArticle.forEach(element => {
  let BTNShow = element.querySelector(".show-more");

  BTNShow.onclick = function() {
    element.classList.toggle("div-show-p");
    BTNShow.classList.toggle("button-active")
    if(BTNShow.classList.contains("button-active")) {
      BTNShow.innerHTML = "Show Less"; 
    }
    else {
      BTNShow.innerHTML = "Show More"; 
    }
  }
});



const homeTyper = document.querySelector('#home-typer');
homeTyper.addEventListener('animationend', () => {
    homeTyper.classList.add('done');
});

const homeTyperTwo = document.querySelector('#home-typer-h2');
homeTyperTwo.addEventListener('animationend', () => {
    homeTyperTwo.classList.add('done');
});