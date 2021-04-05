let items = document.querySelectorAll(".barItems");
let sections=document.querySelectorAll(".section");
//console.log(sec);

for(let i =0;i< items.length;i++)
{
  items[i].addEventListener("click",function(){
  //alert("click "+i);
  //console.log(sections[i]);
  sections[i].scrollIntoView({
  behavior: "smooth",
  block: "start",
  inline: "nearest"});
  currentActiveItem=document.querySelector(".active");
  currentActiveItem.classList.remove("active");
  items[i].classList.add("active");
});
}
