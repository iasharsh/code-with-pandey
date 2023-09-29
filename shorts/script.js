function sound() {
    video = document.getElementsByTagName("video")[0];
    on = document.getElementsByClassName('fa-volume-high')[0];
    mute = document.getElementsByClassName('fa-volume-xmark')[0];

    function muteSound() {
        video.muted = false;
        on.style.display = 'block';
        mute.style.display = 'none';
    }
    function onSound() {
        video.muted = true;
        on.style.display = 'none';
        mute.style.display = 'block';
    }


    c = 0
    if (c == 0) {
        muteSound()
    }
    c = 1;

    for (let i of [on, mute]) {
        i.addEventListener('click', function () {
            if (i == on) {
                onSound()
            }
            else {
                muteSound()
            }
        })
    }
}

function playPause() {
    video = document.getElementsByTagName("video")[0];
    play = document.getElementsByClassName("fa-play")[0];
    pause = document.getElementsByClassName("fa-pause")[0];

    function playVid() {
        video.play()
        pause.style.display = 'block';
        play.style.display = 'none';
    }

    function pauseVid() {
        video.pause()
        pause.style.display = 'none';
        play.style.display = 'block';
    }


    c = 0
    if (c == 0) {
        playVid()
    }
    c = 1;

    for (let x of [play, pause]) {
        x.addEventListener('click', function () {
            if (i == play) {
                playVid()
            }
            else {
                pauseVid()
            }
        })
    }
}



sound()
playPause()