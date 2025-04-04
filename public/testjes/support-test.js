const playButton = document.querySelector(".audio-button")
const audio = document.querySelector("audio")

playButton.addEventListener("click", function() {

    if (audio.paused) {
        audio.play()
    }
    else {
        audio.pause()
    }
    playButton.classList.toggle('paused')
})

// Hierdoor kan ik nu geluiden afspelen 

audio.hidden = true;
playButton.hidden = false;