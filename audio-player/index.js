//  скрытый проигрыватель
const audio = document.querySelector("audio");
const playButton = document.querySelector(".wrapper__play");
let playNum = 0;
const trackList = ["./audio/beyonce.mp3", "./audio/dontstartnow.mp3"];
let isPlay = false;
const imageBackground = document.querySelector(".image__beyonce");
const imageTrack = document.querySelector(".beyonce");
const imageList = ["./image/1.png", "./image/2.png"];
const timeLine = document.querySelector(".time__line");
let timeLineInterval;
audio.src = trackList[playNum];

function timeCalc(sec) {
  const minutes = parseInt(sec / 60);
  const seconds = Math.round(sec % 60);

  return `${minutes}:${seconds > 9 ? seconds : "0" + seconds}`;
}

const linePoint = document.querySelector(".line__point");
const timeSong = document.querySelector(".time__song");
const timeCurrent = document.querySelector(".time");

setTimeout(() => {
  timeSong.innerHTML = timeCalc(audio.duration);
  timeCurrent.innerHTML = timeCalc(0);
}, 1000);

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
      timeCurrent.innerHTML = timeCalc(audio.currentTime);
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
  setTimeout(() => {
    timeSong.innerHTML = timeCalc(audio.duration);
    timeCurrent.innerHTML = timeCalc(0);
  }, 100);
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
  setTimeout(() => {
    timeSong.innerHTML = timeCalc(audio.duration);
    timeCurrent.innerHTML = timeCalc(0);
  }, 100);
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
  const progress = audio.currentTime / audio.duration;
  linePoint.style.left = (Math.floor(progress * 1000) / 10) * 0.97 + "%";
}

// function updateCurrentPosition(event) {
//   const newProgress =
//     (event.clientX - timeLine.offsetLeft) / timeLine.clientWidth;
//   console.log(
//     event.clientX,
//     timeLine.offsetLeft,
//     timeLine.clientWidth,
//     newProgress
//   );
//   linePoint.style.left = (Math.floor(newProgress * 1000) / 10) * 0.97 + "%";
//   audio.currentTime = newProgress * audio.duration;
// }

// linePoint.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// linePoint.addEventListener("mouseup", () => {
//   console.log("mouseup");
// });
// timeLine.addEventListener("mousemove", () => {
//   console.log("mousemove");
// });
// timeLine.addEventListener("click", (event) => {
//   updateCurrentPosition(event);
// });
