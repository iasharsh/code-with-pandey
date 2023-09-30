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
        pause.style.display = 'block';
        play.style.display = 'none';

        video.play()
    }

    function pauseVid() {
        pause.style.display = 'none';
        play.style.display = 'block';

        video.pause()
    }


    c = 0
    if (c == 0) {
        playVid()
    }
    c = 1;

    for (let x of [play, pause]) {
        x.addEventListener('click', function () {
            if (x == play) {
                playVid()
            }
            else {
                pauseVid()
            }
        })
    }
}

function clickKaro() {
    var icon = document.querySelectorAll('.dummy');
    c = 0;

    for (let i of icon) {
        i.addEventListener('click', function () {
            if (c == 0) {
                i.style.color = 'rgb(40, 189, 215)';
                c = 1;
            }
            else {
                i.style.color = 'white';
                c = 0;
            }
        })
    }
}

function shareKaro() {
    share = document.getElementById("share")
    copy = document.getElementById('copy');

    share.addEventListener("click", function () {
        navigator.clipboard.writeText(`https://cdn1.frocdn.ch/nP0VaUmZM7EUrjG.mp4`)

        copy.style.setProperty("display", "block")
        copy.style.setProperty("transition", "display 1s")

        setTimeout(function(){
            copy.style.setProperty("display", "none")
        },2000)

    })
}

sound()
playPause()
clickKaro()
shareKaro()