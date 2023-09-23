//  скрытый проигрыватель
const audio = document.querySelector("audio");
const playButton = document.querySelector(".wrapper__play");
let playNum = 0;
const trackList = ["./audio/beyonce.mp3", "./audio/dontstartnow.mp3"];
let isPlay = false;
const imageBackground = document.querySelector(".image__beyonce");
const imageTrack = document.querySelector(".beyonce");
const imageList = ["./image/1.png", "./image/2.png"];
const timeLine = document.querySelector(".time__line ");
let timeLineInterval;
audio.src = trackList[playNum];

function playAudio() {
  if (isPlay) {
    playButton.classList.add("pause");
    pauseAudio();
    isPlay = false;
    clearInterval(timeLineInterval);
  } else {
    playButton.classList.remove("pause");

    audio.play();
    isPlay = true;
    timeLineInterval = setInterval(() => {
      updateProgress();
    }, 1000);
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
  audio.src = trackList[playNum];
  audio.currentTime = 0;
  imageTrack.src = imageList[playNum];
  imageBackground.src = imageList[playNum];
  playAudio();
}

function playPrev() {
  isPlay = false;
  if (playNum === 0) {
    playNum = trackList.length - 1;
  } else {
    playNum = playNum - 1;
  }
  audio.src = trackList[playNum];
  audio.currentTime = 0;
  imageTrack.src = imageList[playNum];
  imageBackground.src = imageList[playNum];
  playAudio();
}

const playPrevButton = document.querySelector(".wrapper__image__pravo");
const playNextButton = document.querySelector(".wrapper__image__levo");

playNextButton.addEventListener("click", () => {
  playNext();
});

playPrevButton.addEventListener("click", () => {
  playPrev();
});

function updateProgress() {
  console.log(audio.currentTime, audio.duration);
  const progress = audio.currentTime / audio.duration;
  timeLine.style.paddingLeft = Math.floor(progress * 1000) / 10 + "%";
}

function updateCurrentPosition(event) {}
