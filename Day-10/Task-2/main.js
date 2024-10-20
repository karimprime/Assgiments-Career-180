const images = ["images/logo10.png", "images/a-logo.png", "images/d-logo.png"];
let currentIndex = 0;
let interval;

const currentImage = document.getElementById('currentImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const startSlideshow = document.getElementById('startSlideshow');
const stopSlideshow = document.getElementById('stopSlideshow');

function showImage(index) {
    currentImage.src = images[index];
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

startSlideshow.addEventListener('click', () => {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 2000);
});

stopSlideshow.addEventListener('click', () => {
    clearInterval(interval);
});
