const clips = document.querySelectorAll('.clip');

for (let i = 0; i < clips.length; i++) {
    clips[i].addEventListener('click', (e) => {
        console.log(e.target.id);
        playAudio(e.target.id);
    });
}

function playAudio (id) {
    const audio = new Audio(id);
    audio.play();
}

const playButton = document.querySelector('button.play');
const playHead = document.querySelector('.playhead');

let leftPosition = 20;

playButton.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 20) {
        console.log('already running');
        return 'already running';
    }
    movePlayhead();
    const fullMix = new Audio('audio/SFC_website_stereo.wav');
    fullMix.play();
});

function movePlayhead() {
    let count = 0;

    const timer = setInterval(function() {
        playHead.style.left = leftPosition + 'vw';
        leftPosition += 1;
        console.log(leftPosition);
        if (leftPosition > 80) {
            clearInterval(timer);
            resetPosition();
        }
    },170);
}

function resetPosition() {
    leftPosition = 20;
    playHead.style.left = leftPosition + 'vh';
}