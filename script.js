document.addEventListener('DOMContentLoaded', function () {
    const imageGrid = document.getElementById('imageGrid');

    function changeImages(direction) {
        const images = imageGrid.querySelectorAll('img');
        images.forEach((image, index) => {
            image.src = `${direction}${index + 1}.png`;
        });
    }

    // ... (rest of your code)

    // Add event listeners for arrow buttons
    document.querySelector('.arrow.up').addEventListener('click', function () {
        changeImages('up');
    });

    document.querySelector('.arrow.down').addEventListener('click', function () {
        changeImages('down');
    });

    document.querySelector('.arrow.left').addEventListener('click', function () {
        changeImages('left');
    });

    document.querySelector('.arrow.right').addEventListener('click', function () {
        changeImages('right');
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
