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