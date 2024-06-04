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
const stopButton = document.querySelector('button.stop');
const playHead = document.querySelector('.playhead');

let timer = null;

let leftPosition = 20;
const fullMix = new Audio('audio/SFC_website_stereo.wav');

playButton.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 20) {    
        console.log('already running');
        return 'already running';
    }
    movePlayhead();
    fullMix.play();
});


stopButton.addEventListener('click', () => {
    if (leftPosition > 20) {
        console.log('stop')
        fullMix.pause();
        fullMix.currentTime = 0;    
        clearInterval(timer);
        resetPosition();
    }  
});    

function movePlayhead() {
    let count = 0;
    
    timer = setInterval(function() {
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