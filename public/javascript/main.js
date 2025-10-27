
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


gsap.registerPlugin(ScrollTrigger);


const horizontal = document.querySelector(".horizontal-scroll-sec");

function scrollAmount() {
  let horizontalScrollWidth = horizontal.scrollWidth;
  return -(horizontalScrollWidth - window.innerWidth)
}

const scroller = gsap.to(horizontal, {
  x: scrollAmount,
  duration: 3,
  ease: "none"
});

ScrollTrigger.create({
  trigger: ".scroll-wrap",
  start: "top",
  end: () => `+=${scrollAmount() * -1}`,
  pin: true,
  animation: scroller,
  scrub: 1,
  // markers: true,
  invalidateOnRefresh: true
});

gsap.from(".article-wrapper-two", {
  y: 200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".article-wrapper-two",
    containerAnimation: scroller,
    start: "left center",
    end: "center center",
    scrub: true,
  }
});

gsap.from(".article-wrapper-three", {
  y: -200,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".article-wrapper-three",
    containerAnimation: scroller,
    start: "left center",
    end: "center center",
    scrub: true,
  }
});

gsap.from(".article-wrapper-four", {
  y: 300,
  opacity: 0,
  duration: 1,
  ease: "rough",
  scrollTrigger: {
    trigger: ".article-wrapper-four",
    containerAnimation: scroller,
    start: "left center",
    end: "center center",
    scrub: true,
  }
});

gsap.from(".article-wrapper-five", {
  y: -300,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".article-wrapper-five",
    containerAnimation: scroller,
    start: "left center",
    end: "center center",
    scrub: true,
  }
});