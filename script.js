document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('moespeak.mp3');

    function playAudioWithGap() {
        audio.play();
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
            playAudioWithGap();
        }, 5000); // 5-second gap
    }

    // Initial play
    playAudioWithGap();
});

document.addEventListener('DOMContentLoaded', function () {
    const imageGrid = document.getElementById('imageGrid');

    function changeImages(imagesPrefix) {
        const images = imageGrid.querySelectorAll('img');
        images.forEach((image, index) => {
            image.src = `${imagesPrefix}${index + 1}.png`;
        });
    }

    function revertImages() {
        const images = imageGrid.querySelectorAll('img');
        images.forEach((image, index) => {
            image.src = `front${index + 1}.png`;
        });
    }

    window.addEventListener('mousemove', function (event) {
        const mouseY = event.clientY;
        const screenHeight = window.innerHeight;
        const topThreshold = screenHeight / 3;
        const middleThreshold = (2 * screenHeight) / 3;
        const bottomThreshold = (2 * screenHeight) / 3;

        if (mouseY < topThreshold) {
            changeImages('up');
        } else if (mouseY < middleThreshold) {
            revertImages();
        } else if (mouseY >= bottomThreshold) {
            changeImages('down');
        }
    });

    window.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        const leftThreshold = screenWidth / 3;
        const rightThreshold = (2 * screenWidth) / 3;
        const topThreshold = screenHeight / 3;
        const bottomThreshold = (2 * screenHeight) / 3;

        if (mouseX < leftThreshold) {
            changeImages('left');
        } else if (mouseX >= rightThreshold) {
            changeImages('right');
        } else if (mouseY < topThreshold) {
            changeImages('up');
        } else if (mouseY < middleThreshold) {
            revertImages();
        } else if (mouseY >= bottomThreshold) {
            changeImages('down');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const audio = new Audio('moespeak.mp3');

    function playAudioWithGap() {
        audio.play();
        setTimeout(function () {
            audio.pause();
            audio.currentTime = 0;
            playAudioWithGap();
        }, 5000); // 5-second gap
    }

    // Initial play
    playAudioWithGap();
});
