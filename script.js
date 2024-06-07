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

const sfcPlay = document.querySelector('.stupid.play.overlay');
const sfcStop = document.querySelector('.stupid.stop.overlay');
const sfcHead = document.querySelector('.sfc-playhead');

const fsPlay = document.querySelector('.fs.play.overlay');
const fsStop = document.querySelector('.fs.stop.overlay');
const fsHead = document.querySelector('.fs-playhead');
const fsReel = document.querySelector('.fun-station');

let funTimer = null;
let stupidTimer = null;
let leftPosition = 15;

const sfcMix = new Audio('audio/SFC_website_stereo.wav');
const fsMix = new Audio('audio/funstation/fs_fullMix_v2.wav');

sfcPlay.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 15 && sfcMix.currentTime > 0) {    
        console.log('already running');
        return 'already running';
    }
    if (fsMix.currentTime > 0) resetFSPosition();
    moveSfcHead();
    sfcMix.play();
});


sfcStop.addEventListener('click', () => {
    if (leftPosition > 15 && sfcMix.currentTime > 0) {
        console.log('stop') 
        resetPosition();
    }  
});    

function moveSfcHead() {
    let count = 0;

    stupidTimer = setInterval(function() {
        sfcHead.style.left = leftPosition + 'vw';
        sfcHead.style.width = "3px";
        leftPosition += 1;
        console.log(leftPosition);
        if (leftPosition > 85) {
            resetPosition();
        }
    },145);
}

function resetPosition() {
    sfcMix.pause();
    sfcMix.currentTime = 0;   
    leftPosition = 15;
    sfcHead.style.width = "0px";
    clearInterval(stupidTimer);
    //sfcHead.style.left = leftPosition + 'vh';
}

fsPlay.addEventListener('click', () => {
    console.log('click');
    if (leftPosition > 15 && fsMix.currentTime > 0) {    
        console.log('already running');
        return 'already running';
    }
    if (sfcMix.currentTime > 0) resetPosition();
    moveFSHead();
    fsMix.play();
});

fsStop.addEventListener('click', () => {
    if (leftPosition > 15 && fsMix.currentTime > 0) {
        console.log('stop');   
        resetFSPosition();
    }  
}); 


function moveFSHead() {
    let count = 0;
    
    funTimer = setInterval(function() {
        fsHead.style.left = leftPosition + 'vw';
        fsHead.style.width = "3px";
        leftPosition += 1;
        console.log(leftPosition);
        if (leftPosition > 85) {
            resetFSPosition();
        }
    },190);
}

function resetFSPosition() {
    leftPosition = 15;
    fsMix.pause();
    fsMix.currentTime = 0; 
    fsHead.style.width = "0px";
    clearInterval(funTimer);
    //fsHead.style.left = leftPosition + 'vh';
}