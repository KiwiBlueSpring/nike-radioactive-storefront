// Js to control slides positioning
let currentStep = 0

function nextSlide() {
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

