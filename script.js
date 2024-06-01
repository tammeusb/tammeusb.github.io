const clip = document.querySelector('.clip');

clip.addEventListener('click', (e) => {
    console.log(e.target.id);
    playAudio(e.target.id);
});

function playAudio (id) {
    const audio = new Audio(id);
    audio.play();
}