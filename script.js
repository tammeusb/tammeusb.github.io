const clips = document.querySelectorAll('.clip');

for (let i = 0; i < clips.length; i++) {
    clips[i].addEventListener('click', (e) => {
        console.log(e.target.id);
        playAudio(e.target.id);
    });
}

let audio = null;

function playAudio (id) {
    audio = new Audio(id);
    audio.play();
}

const sfcPlay = document.querySelector('button.sfc-play');
const sfcStop = document.querySelector('button.sfc-stop');
const sfcHead = document.querySelector('.sfc-playhead');

const fsPlay = document.querySelector('button.fs-play');
const fsStop = document.querySelector('button.fs-stop');
const fsHead = document.querySelector('.fs-playhead');

let timer = null;

let leftPosition = 20;
const sfcMix = new Audio('audio/SFC_website_stereo.wav');
const fsMix = new Audio('audio/funstation/fs_fullMix_v2.wav');

sfcPlay.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 20) {    
        console.log('already running');
        return 'already running';
    }
    moveSfcHead();
    sfcMix.play();
});


sfcStop.addEventListener('click', () => {
    if (leftPosition > 20 && sfcMix.currentTime > 0) {
        console.log('stop')
        sfcMix.pause();
        sfcMix.currentTime = 0;    
        clearInterval(timer);
        resetPosition();
    }  
});    

function moveSfcHead() {
    let count = 0;

    timer = setInterval(function() {
        sfcHead.style.left = leftPosition + 'vw';
        sfcHead.style.width = "3px";
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
    sfcHead.style.width = "0px";
    //sfcHead.style.left = leftPosition + 'vh';
}

fsPlay.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 20) {    
        console.log('already running');
        return 'already running';
    }
    moveFSHead();
    fsMix.play();
});

fsStop.addEventListener('click', () => {
    if (leftPosition > 20 && fsMix.currentTime > 0) {
        console.log('stop');
        fsMix.pause();
        fsMix.currentTime = 0;    
        clearInterval(timer);
        resetFSPosition();
    }  
}); 


function moveFSHead() {
    let count = 0;
    
    timer = setInterval(function() {
        fsHead.style.left = leftPosition + 'vw';
        fsHead.style.width = "3px";
        leftPosition += 1;
        console.log(leftPosition);
        if (leftPosition > 80) {
            clearInterval(timer);
            resetFSPosition();
        }
    },210);
}

function resetFSPosition() {
    leftPosition = 20;
    fsHead.style.width = "0px";
    //fsHead.style.left = leftPosition + 'vh';
}