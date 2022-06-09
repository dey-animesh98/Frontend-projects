console.log("Hello World!");
// const myName = "Animesh Dey";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.addEventListener('click', function(){
//     h1.textContent = myName;
//     h1.style.backgroundColor = "white";

// });


// Copyright year auto update
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear; 

// MObile Navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener('click', function(){
    headerEl.classList.toggle("nav-open");
});

// Stickey Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
    function (entries) {
    const ent = entries[0];
    console.log(ent);
   
    if (ent.isIntersecting === false) {
        document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
        document.body.classList.remove("sticky");
    }
    
},
{
    root: null,
    threshold: 0,
    rootMargin: '-80px',
});
observer.observe(sectionHeroEl);





// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//     var flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";
  
//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));
  
//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1;
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);
  
//     if (!isSupported) document.body.classList.add("no-flexbox-gap");
//   }
//   checkFlexGap();