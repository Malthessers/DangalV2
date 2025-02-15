let heroIndex = 0;
const heroSlides = document.querySelectorAll(".hero-slide");
const heroSlider = document.querySelector(".hero-slider");

function moveHeroSlide(direction) {
    heroIndex += direction;
    if (heroIndex < 0) heroIndex = 0; // Prevent moving before the first image
    if (heroIndex >= heroSlides.length - 1) heroIndex = heroSlides.length - 1; // Prevent moving past the last image
    heroSlider.style.transform = `translateX(-${heroIndex * 100}%)`;
}
