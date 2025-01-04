const buttons = document.querySelectorAll('.gg-name-wrapper');
const sound = document.getElementById('hoverSound');

let canPlayAudio = false;
document.addEventListener('click', () => {
  canPlayAudio = true;
});


buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    if (canPlayAudio) {
      sound.play();
    }
  });

  button.addEventListener('mouseleave', () => {
    sound.pause();
    sound.currentTime = 0;
  });
});