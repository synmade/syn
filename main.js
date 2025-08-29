const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Ur Eyes",
    name: "Synmade",
    source: "https://github.com/synmade/syn/raw/refs/heads/main/ur%20eyes%20(master%203).mp3",
  },
];

let currentSongIndex = 0; // ✅ only one song

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;
}

song.addEventListener("timeupdate", () => {
  if (!song.paused) progress.value = song.currentTime;
});

song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.replace("fa-pause", "fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.replace("fa-play", "fa-pause");
}

function playPause() {
  song.paused ? playSong() : pauseSong();
}

playPauseButton.addEventListener("click", playPause);
progress.addEventListener("input", () => (song.currentTime = progress.value));
progress.addEventListener("change", playSong);

forwardButton.addEventListener("click", () => {
  if (songs.length > 1) {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSongInfo();
    playSong();
  }
});

backwardButton.addEventListener("click", () => {
  if (songs.length > 1) {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSongInfo();
    playSong();
  }
});

updateSongInfo();
