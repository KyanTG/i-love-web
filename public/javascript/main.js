
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


// let showMoreArticle = document.querySelectorAll(".show-more-article");

// showMoreArticle.forEach(element => {
//   let BTNShow = element.querySelector(".show-more");

//   BTNShow.onclick = function() {
//     element.classList.toggle("div-show-p");
//     BTNShow.classList.toggle("button-active")
//     if(BTNShow.classList.contains("button-active")) {
//       BTNShow.innerHTML = "Show Less"; 
//     }
//     else {
//       BTNShow.innerHTML = "Show More"; 
//     }
//   }
// });

// typewriter effects when they are done

const homeTyper = document.querySelector('h1');
homeTyper.addEventListener('animationend', () => {
    homeTyper.classList.add('done');
});


const homeTyperTwo = document.querySelector('h2');
homeTyperTwo.addEventListener('animationend', () => {
    homeTyperTwo.classList.add('done');
});


// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".article-style");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: none,
//   ScrollTrigger: {
//     trigger: ".horizontal-scroll-sec",
//     pin: true,
//     scrub: 1,
//     end: () => "+=" + document.querySelector(".horizontal-scroll-sec").offsetWidth
//   }
// })

gsap.registerPlugin(ScrollTrigger);


const horizontal = document.querySelector(".horizontal-scroll-sec");
let horizontalWidth = horizontal.offsetWidth;  
let scrollAmount = horizontalWidth - window.innerWidth;

const scroller = gsap.to(horizontal, {
  x: -scrollAmount,
  duration: 3,
  ease: "none"
});

ScrollTrigger.create({
  trigger: ".scroll-wrap",
  start: "top top",
  end: "+=" + scrollAmount,
  pin: true,
  animation: scroller,
  scrub: 1,
  markers: true
});