/*
global variables
*/
let items = document.querySelectorAll(".barItems");
let sections=document.querySelectorAll(".section");
//console.log(sec);

for(let i =0;i< items.length;i++)
{
  /*
  function to build a dynamic navigation bar
  @ parameter : it takes no parameter

  */
  items[i].addEventListener("click",function(){
  //alert("click "+i);
  //console.log(sections[i]);
  sections[i].scrollIntoView({
  //behavior: "smooth",
  block: "start",
  inline: "nearest"});
  currentActiveItem=document.querySelector(".active");
  currentActiveItem.classList.remove("active");
  currentActiveSection=document.querySelector(".your-active-class");
  currentActiveSection.classList.remove("your-active-class");
  items[i].classList.add("active");
  sections[i].classList.add("your-active-class")
});
/*
function to add your-active-class to the section that comes into view
@para ni parameter
*/
addEventListener("scroll",function(){
  if (isInViewport(sections[i]))
  {
    //console.log(`section ${i} : is in view`);
    currentActiveSection=document.querySelector(".your-active-class");
    currentActiveSection.classList.remove("your-active-class");
    sections[i].classList.add("your-active-class")
  }
});

}
/*
@ descprition : a function used to DEBUG
*/
/*
document.querySelector(".MainBody").addEventListener("click",function(){
  console.log(document.querySelector(".your-active-class"));
});*/


/*
function called by the scrool event listener
in order to check the section is in view or not
*/
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
