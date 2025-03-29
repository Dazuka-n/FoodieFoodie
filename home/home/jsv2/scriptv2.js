let slideIndex = 0;

function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");
    
    slides[slideIndex].classList.remove("active");
    
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    
    slides[slideIndex].classList.add("active");
}

// Auto slide every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);