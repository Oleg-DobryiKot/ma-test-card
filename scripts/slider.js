let slideIndex = 1;

function showSlideByNumber(slideNumber) {
    let i = 0;
    const slides = document.querySelectorAll('.card__slider-item');
    const colors = document.querySelectorAll('.card__item-color');

    if (slideNumber > slides.length) {
        slideIndex = 1;
    }
    if (slideNumber < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        colors[i].className = colors[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    colors[slideIndex - 1].className += "active";
}

function showNextSlide() {
    showSlideByNumber(slideIndex += 1);
}

function showPrevSlide() {
    showSlideByNumber(slideIndex -= 1);
}

function showSlide(slideNumber) {
    showSlideByNumber(slideIndex = slideNumber);
}

showSlideByNumber(slideIndex);