var audioPlayer = document.getElementById("audioPlayer");
var playButton = document.getElementById("playButton");

function toggleAudio() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playButton.innerText = "Pausar";
  } else {
    audioPlayer.pause();
    playButton.innerText = "Reproducir";
  }
}

function repeatAudio() {
  audioPlayer.currentTime = 0;
  setTimeout(function() {
    audioPlayer.play();
    playButton.innerText = "Pausar";
  }, 1000); // 1000 milisegundos = 1 segundo de retraso
}

// Iniciar la reproducción y configurar el texto del botón después de que la página se ha cargado completamente
window.addEventListener('load', function() {
  audioPlayer.play();
  playButton.innerText = "Pausar";
});