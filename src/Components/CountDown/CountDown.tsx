import { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { library } from 'store';
import { CountDownProps } from './types';
import { convertMs } from 'utils';

import './styles.css';

export const CountDown: FC<CountDownProps> = observer(({ endDate, isMouseOver, id }) => {
  const timesLeft = endDate.getTime() - new Date().getTime();
  const { initSeconds, initMinutes, initHours } = convertMs(timesLeft);
  const [seconds, setSeconds] = useState(initSeconds);
  const [minutes, setMinutes] = useState(initMinutes);
  const [hours, setHours] = useState(initHours);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds) {
        setSeconds((prevState) => prevState - 1);
      } else {
        if (minutes) {
          setMinutes((prevState) => prevState - 1);
          setSeconds(59);
        } else {
          if (hours) {
            setHours((prevState) => prevState - 1);
            setMinutes(59);
            setSeconds(59);
          }
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className='countdown_container'>
      <div className='countdown_wrapper'>
        <span>До возврата:</span>
        <span>
          {hours < 10 ? '0' + hours : hours}:{minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </span>
      </div>
      {isMouseOver && (
        <button className='button' onClick={() => library.returnBook(id)}>
          Вернуть книгу
        </button>
      )}
    </div>
  );
});
