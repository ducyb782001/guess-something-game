export const playClickSound = () => {
  const audio = new Audio("/music/click.wav");
  audio.play();
};

export const playCountDownSound = () => {
  const audio = new Audio("/music/count-down.mp3");
  audio.play();
};

export const playApproveSound = () => {
  const audio = new Audio("/music/approve.mp3");
  audio.play();
};

export const playSkipSound = () => {
  const audio = new Audio("/music/skip.mp3");
  audio.play();
};

export default null;
