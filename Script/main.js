// Fungsi untuk memulai atau menghentikan pemutaran audio
function playPause() {
    var audio = document.querySelector('.song-track'); 
    var playButton = document.getElementById('play'); 
    var pauseButton = document.getElementById('pause'); 

    // Jika audio sedang di-pause
    if (audio.paused) {
        audio.play(); 
        playButton.style.display = 'none'; 
        pauseButton.style.display = 'inline-flex'; 
    } else {
        audio.pause(); 
        playButton.style.display = 'inline-flex'; 
        pauseButton.style.display = 'none'; 
    }
}

// Event listener saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.querySelector('.song-track'); 
    var progressBarFill = document.getElementById('progress-bar-fill'); 
    var currentTimeDisplay = document.getElementById('current-time'); 
    var durationDisplay = document.getElementById('duration'); 

    // Event listener saat pembaruan waktu audio
    audioPlayer.addEventListener('timeupdate', function() {
        var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBarFill.style.width = progress + '%'; 

        var currentTime = formatTime(audioPlayer.currentTime); 
        currentTimeDisplay.textContent = currentTime; 

        // Jika durasi audio valid (tidak NaN)
        if (!isNaN(audioPlayer.duration)) {
            var duration = formatTime(audioPlayer.duration); 
            durationDisplay.textContent = duration;
        }
    });
});
