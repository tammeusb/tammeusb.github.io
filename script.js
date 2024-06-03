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

let leftPosition = 40;

playButton.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 40) {
        console.log('already running');
        return 'already running';
    }
    movePlayhead();
});

function movePlayhead() {
    let count = 0;

    const timer = setInterval(function() {
        playHead.style.left = leftPosition + 'vh';
        leftPosition += 2;
        console.log(leftPosition);
        if (leftPosition > 150) {
            clearInterval(timer);
            resetPosition();
        }
    },200);
}

function resetPosition() {
    leftPosition = 40;
    playHead.style.left = leftPosition + 'vh';
}