//  скрытый проигрыватель
const audio = document.querySelector("audio");
const playButton = document.querySelector(".wrapper__play");
let playNum = 0;
const trackList = ["./audio/beyonce.mp3", "./audio/dontstartnow.mp3"];
let isPlay = false;

function playAudio() {
  if (isPlay) {
    playButton.classList.add("pause");
    pauseAudio();
    isPlay = false;
  } else {
    playButton.classList.remove("pause");
    audio.src = trackList[playNum];
    audio.currentTime = 0;
    audio.play();
    isPlay = true;
  }
}
function pauseAudio() {
  audio.pause();
}

playButton.addEventListener("click", () => {
  playAudio();
});

function playNext() {
  isPlay = false;
  if (playNum === trackList.length - 1) {
    playNum = 0;
  } else {
    playNum = playNum + 1;
  }

  playAudio();
}

function playPrev() {
  isPlay = false;
  if (playNum === trackList.length) {
    playNum = 0;
  } else {
    playNum = playNum + 1;
  }

  playAudio();
}
playPrev();

const playPrevButton = document.querySelector(".wrapper__image__pravo");
const playNextButton = document.querySelector(".wrapper__image__levo");

playNextButton.addEventListener("click", () => {
  playNext();
});

playPrevButton.addEventListener("click", () => {});
