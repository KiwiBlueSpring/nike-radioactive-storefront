document.addEventListener('DOMContentLoaded', (event) => {

// get all the customisationPlatter elements
let platters = document.querySelectorAll('.customisationPlatter');

console.log(platters)

// loop through all the platters and add an event listener
platters.forEach(function(platter) {
    platter.addEventListener('click', function() {
        // get the optionRow within the clicked platter
        let optionRow = this.querySelector('.optionRow');

        // toggle the display of the optionRow
        if (optionRow.style.display === "none") {
            optionRow.style.display = "flex";
        } else {
            optionRow.style.display = "none";
        }
    });

    // get all the options within the platter
    let options = platter.querySelectorAll('.sizeOption, .colourOption');

    // loop through the options and add an event listener
    options.forEach(function(option) {
        option.addEventListener('click', function(event) {
            // prevent the click event from bubbling up to the platter
            event.stopPropagation();

            // hide the optionRow when an option is clicked
            this.parentNode.style.display = "none";
        });
    });
});
});


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")


});

