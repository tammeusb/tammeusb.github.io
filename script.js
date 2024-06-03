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

playButton.addEventListener('click', () => {
    console.log('click');
    movePlayhead();
});

function movePlayhead() {
    let count = 0;
    let leftPosition = 30;

    const timer = setInterval(function() {
        playHead.style.left = leftPosition + 'vh';
        leftPosition++;
        console.log(leftPosition);
        if (leftPosition > 80) clearInterval(timer);
    },200);

}