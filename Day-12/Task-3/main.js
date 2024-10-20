// Get references to DOM elements
const canvas = document.getElementById('memeCanvas');
const context = canvas.getContext('2d');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const generateButton = document.getElementById('generateMeme');


const memeImage = new Image();
memeImage.src = 'images/logo10.png'; 


function drawMeme() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.drawImage(memeImage, 0, 0, canvas.width, canvas.height);

    context.font = 'bold 40px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.shadowColor = 'black';
    context.shadowBlur = 10;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 2;

    const topText = topTextInput.value.toUpperCase();
    context.fillText(topText, canvas.width / 2, 50);

    const bottomText = bottomTextInput.value.toUpperCase();
    context.fillText(bottomText, canvas.width / 2, canvas.height - 20);
}
generateButton.addEventListener('click', () => {
    drawMeme();
});
memeImage.onload = () => {
    drawMeme();
};
