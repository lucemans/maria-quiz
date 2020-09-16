console.log("something else");

var currentSlide = 1;

function nextSlide() {
    console.log("go into the next slide");
    var a = document.querySelector(".slide-" + currentSlide);
    a.classList.remove("active");

    currentSlide = currentSlide + 1;
    var b = document.querySelector(".slide-" + currentSlide);
    b.classList.add("active");
}





var startButton = document.querySelector('.slide-1 .btn');
startButton.addEventListener('click', nextSlide);