const buttons = document.querySelectorAll('.key');
const keysWrapper = document.querySelector('.keys-wrapper');
const audios = document.querySelectorAll('audio');

const pressButton = (e) => {
  const pressedButton = searchButtonCode(e.keyCode);
  const audio = searchAudio(e.keyCode);
  if (pressedButton) {
    pressedButton.style.background = 'red';
    audio.play();
  }
};

const leaveButton = (e) => {
  const leaveButton = searchButtonCode(e.keyCode);
  if (leaveButton) {
    leaveButton.style.background = 'none';
  }
};

const searchButtonCode = (keyCode) => {
  for (let i = 0; i < buttons.length; i++) {
    if (keyCode === Number(buttons[i].dataset.key)) {
      return buttons[i];
    }
  }
};

const searchAudio = (code) => {
  let searchAudioItem;
  audios.forEach((item, key) => {
    if (Number(item.dataset.key) === code) {
      console.log(item);
      searchAudioItem = item;
    }
  });
  return searchAudioItem;
};

function ready() {
  document.addEventListener('keydown', (e) => pressButton(e));
  document.addEventListener('keyup', (e) => leaveButton(e));
}

document.addEventListener('DOMContentLoaded', ready);
