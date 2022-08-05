const buttons = document.querySelectorAll('.key');

const pressButton = (e) => {
  const searchButton = document.querySelector(`div[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (searchButton && audio) {
    searchButton.classList.toggle('active');
    audio.play();
  }
};

const leaveButton = (e) => {
  const searchButton = document.querySelector(`[data-key="${e.keyCode}"]`);
  if (searchButton) {
    searchButton.classList.toggle('active');
  }
};

const playClick = (e) => {
  const keyButton = e.target.closest('div[data-key]');
  const audio = document.querySelector(`audio[data-key="${keyButton?.dataset.key}"]`);
  if (keyButton && audio) {
    keyButton.classList.toggle('active');
    audio.play();
    setTimeout(() => {
      keyButton.classList.toggle('active');
    }, 0.9);
  }
};

function ready() {
  document.addEventListener('keydown', (e) => pressButton(e));
  document.addEventListener('keyup', (e) => leaveButton(e));
  document.addEventListener('click', (e) => playClick(e));
}

document.addEventListener('DOMContentLoaded', ready);
