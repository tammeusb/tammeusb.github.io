const clip = document.querySelector('.track-3 .clip.two');

clip.addEventListener('click', () => {
    console.log('hello');
    playAudio();
});

function playAudio () {
    const audio = new Audio('press.wav');
    audio.play();
}