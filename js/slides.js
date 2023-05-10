// Flow based slides - for screens and going 'next'
let currentStep = 0
const totalSlides = 2;

function nextSlid1() {
    currentStep = (currentStep+1) 
    document.querySelector('.slidesWrapper').style.transform = `translateX(-${currentStep * 100}%)`;
}

function previousSlide() {
    currentStep = (currentStep-1) 
    document.querySelector('.slidesWrapper').style.transform = `translateX(-${currentStep * 100}%)`;
}

function reset() {
    // const numSteps = document.
    currentStep = 0
    document.querySelector('.slidesWrapper').style.transform = `translateX(-${currentStep * 100}%)`;
}

function nextSlide() {
    currentStep = (currentStep + 1) % totalSlides; // This will reset currentStep to 0 when it reaches totalSlides
    document.querySelector('.slidesWrapper').style.transform = `translateX(-${currentStep * 100}%)`;
}



// Automatic Slides

let currentSlide = 0
// const numSlides = document.querySelector('.slidesWrapper').childElementCount
let numSlides = 2


setInterval(()=>{

    currentSlide = (currentSlide+1) % numSlides;
    document.querySelector('.slidesWrapper').style.transform = `translateX(-${currentSlide * 100}%)`;


},2000)



