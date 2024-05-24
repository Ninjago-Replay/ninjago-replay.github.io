document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('background-music');
    audio.play();
    this.style.display = 'none'; // Hide button after playing
});
