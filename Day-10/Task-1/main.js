const balls = document.querySelectorAll('.ball');
let currentIndex = 0;
let phase = 1;
let allBallsIndex = 0;

function lightUpBalls() {
    if (phase === 1) {

        balls.forEach(ball => ball.classList.remove('active'));

        balls[currentIndex].classList.add('active');

        currentIndex++;

        if (currentIndex >= balls.length) {
            currentIndex = 0;
            phase = 2;
        }
    }

    else if (phase === 2) {
        balls[4].classList.remove('active');

        if (allBallsIndex < balls.length) {
            balls[allBallsIndex].classList.add('active');
            allBallsIndex++;
        } else {
            allBallsIndex = 0;
            phase = 1;

            balls.forEach(ball => ball.classList.remove('active'));
        }
    }

    setTimeout(lightUpBalls, 500);
}

setTimeout(lightUpBalls, 500);
