//window.setTimeout(()=>element.scrollIntoView({behavior: "smooth"}), 1000);

class NavLink
{
    constructor(element)
    {
        this.element = element;
        console.log(`.background[data-scrollPoint='${this.element.dataset.scrollpoint}']`);
        console.log(element);
        this.child = document.querySelector(`.background[data-scrollPoint='${this.element.dataset.scrollpoint}']`);
        this.element.addEventListener("click", e=>{ e.preventDefault(); this.selected();})
    }
    selected()
    {
        this.child.scrollIntoView({behavior: "smooth"});
    }
}

[...document.querySelectorAll("nav .scroll-button")].map(x=> new NavLink(x));

 var overlay = document.querySelector(".overlay");
document.querySelector(".close-button").addEventListener("click",toggleOverlay);
var main = document.querySelector(".container");
window.setTimeout(()=>overlay.classList.remove("overlay-preload"),20); //fix a weird glitch with transitions.
function toggleOverlay()
{
    overlay.classList.toggle("open-overlay");
    main.classList.toggle("close-container");
    window.scrollTo();
} 


window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".top-nav");
var sticky = document.querySelector(".background1").offsetTop-10;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}