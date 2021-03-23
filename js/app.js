/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 *
*/

/*
 * Define Global Variables
 */
const sectionNodeList = document.querySelectorAll('section');
const navbarMenu=document.querySelectorAll('.menuItem');
/*
 * End Global Variables
 */

/* Start Helper Functions
 *
 */
 function myFunction(){}


//   let item = sectionNodeList[i];

// scrolling function
function scrollTo(section){
  section.scrollIntoView({
    behavior: "smooth",
    block: "strat",
    inline:"nearest"
  });

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport
// event for the first section
 for (let i = 0; i < sectionNodeList.length; i++) {
navbarMenu[i].addEventLister('click',scrollTO(sectionNodeList[i]));
console.log(i);
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
