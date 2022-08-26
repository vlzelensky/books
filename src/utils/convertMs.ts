export const convertMs = (ms: number) => {
  let seconds: number | string = Math.floor(ms / 1000);
  let minutes: number | string = Math.floor(seconds / 60);
  let hours: number | string = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return {
    initHours: hours,
    initMinutes: minutes,
    initSeconds: seconds,
  };
};
