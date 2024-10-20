
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
const button = document.getElementById('generateCircles');
const colorInput = document.getElementById('circleColor');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

function drawRandomCircle() {
    const radius = getRandomNumber(10, 50);
    const x = getRandomNumber(radius, canvas.width - radius);
    const y = getRandomNumber(radius, canvas.height - radius);
    const color = colorInput.value;

    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.fillStyle = color;
    context.fill();
}

button.addEventListener('click', () => {

    context.clearRect(0, 0, canvas.width, canvas.height);

    const numberOfCircles = Math.floor(getRandomNumber(5, 20));

    for (let i = 0; i < numberOfCircles; i++) {
        drawRandomCircle();
    }
});
