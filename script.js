const slider = document.querySelector(".hero-slider");
const dots = document.querySelectorAll(".dot");
const totalSlides = dots.length;

let currentIndex = 0;
let autoScroll;

/* Move to specific slide */
function jumpToSlide(index) {
    currentIndex = index;
    updateSlider();
    resetAutoScroll();
}

/* Move to next slide */
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
}

/* Move to previous slide */
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
}

/* Update slider position */
function updateSlider() {
    slider.style.transform = `translateX(${-currentIndex * 1000}px)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

/* Auto-scroll function */
function startAutoScroll() {
    autoScroll = setInterval(nextSlide, 3000); // Changes slide every 3 seconds
}

/* Reset auto-scroll on manual navigation */
function resetAutoScroll() {
    clearInterval(autoScroll);
    startAutoScroll();
}

// Event listeners for navigation buttons
document.querySelector(".hero-next").addEventListener("click", () => {
    nextSlide();
    resetAutoScroll();
});

document.querySelector(".hero-prev").addEventListener("click", () => {
    prevSlide();
    resetAutoScroll();
});

// Start auto-scroll on page load
startAutoScroll();
updateSlider();
