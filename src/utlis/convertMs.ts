export const convertMs = (ms: number) => {
  let seconds: number | string = Math.floor(ms / 1000);
  let minutes: number | string = Math.floor(seconds / 60);
  let hours: number | string = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return {
    initHours: Number(hours),
    initMinutes: Number(minutes),
    initSeconds: Number(seconds),
  };
};
