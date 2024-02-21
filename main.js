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
    title: "Talk Facts",
    name: "D Thang ft. Bando & T Dot",
    source:
      "https://github.com/synmade/syn/raw/main/Dthang%20x%20Bando%20x%20T%20dot%20%20Talk%20Facts%20%20Official%20Music%20Video%20%20(1).mp3",
  },
  {
    title: "Ain't No Love",
    name: "Kay Flock ft. Thunder Bklu",
    source:
      "https://github.com/synmade/syn/raw/main/Kay%20Flock%20%20Aint%20No%20Love%20Visualizer%20ft%20Thunder%20Bklu.mp3",
  },
  {
    title: "SMD",
    name: "Sha Gz ft. Nesty Floxks",
    source:
      "https://github.com/synmade/syn/raw/main/Sha%20Gz%20%20SMD%20ftNesty%20Floxks%20Official%20Video%20%20crankthat.mp3",
  },
  {
    title: "New Opp",
    name: "Sha Gz",
    source:
      "https://github.com/synmade/syn/raw/main/Sha%20Gz%20%20New%20Opp%20Official%20Video.mp3",
  },
  {
    title: "PSA",
    name: "Kay Flock",
    source:
      "https://github.com/synmade/syn/raw/main/Kay%20Flock%20%20PSA%20Official%20Video.mp3",
  },

  {
    title: "Notti Bop",
    name: "Kyle Richh ft. Jenn Carter & TaTa",
    source:
      "https://github.com/synmade/syn/raw/main/Kyle%20Richh%20x%20TaTa%20x%20Jenn%20Carter%2041%20%20Notti%20Bop%20Official%20Music%20Video.mp3",
  },
  {
    title: "Is Ya Ready",
    name: "Kay Flock",
    source:
      "https://github.com/synmade/syn/raw/main/Kay%20Flock%20%20Is%20Ya%20Ready%20shot%20by%20KLO%20Vizionz.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
