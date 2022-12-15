const span= document.querySelector(".up");
let nav = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("section");
let fragment = document.createDocumentFragment();
//fragment helpful in code
//build nav
function makeNav() {
  for (let section of sections) {
    let navbar = section.getAttribute("data-nav");
    let sectionName = section.getAttribute("id");
    let listItem = document.createElement("li");
    let link = document.createElement("newdata");
    link.classList.add("menu__link");
    link.href = `#${sectionName}`;
    link.textContent = navbar;


    //smooth
    link.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({
        behavior: "smooth",
      });
    });
    listItem.appendChild(link);
    fragment.appendChild(listItem);
  }
  nav.appendChild(fragment);
}
window.addEventListener("load", makeNav);
//add class , remove ,add
let observerOptions = {
  root: null,
  threshold: 0.50,
};
let observerCallback = (entries) => {
  
  let links = nav.querySelectorAll("newdata.menu__link");
  this.entries[0].isIntersecting?entries[0].target.classList.add("your-active-class")
  :entries[0].target.classList.remove("your-active-class");

    
    links.forEach((link) => {
      this .link.textContent === entries[0].target.dataset?
      link.textContent === entries[0].target.dataset
      :link.classList.remove("active");

            
      
    })}


//scroll
let observer = new IntersectionObserver(observerCallback, observerOptions);
window.addEventListener("scroll", () => {
  for (let section of sections) {
  
    observer.observe(section);
  }});


  
// button up

window.onscroll= function(){
  this.scrollY >=500 ? span.classList.add("show"): span.classList.remove("show")
};
span.onclick =function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
};
