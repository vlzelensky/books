import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { MAINPAGE } from 'Router/routes';
import { library } from 'store';
import { ModalProps } from './types';
import { Input, CountDown } from 'Components';
import calendarImage from 'public/images/calendarImage.png';

import './styles.css';

export const Modal: FC<ModalProps> = ({ children, onClose, book }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const navigate = useNavigate();

  const { id, isTaken, endDate } = book;

  const isDisabled = new Date(inputValue) < new Date();

  const onChange = (value: string) => setInputValue(value);

  const takeBook = () => {
    if (inputValue) {
      const date = new Date(inputValue);
      library.takeBook(id, date);
      onClose();
      navigate(MAINPAGE);
    }
  };

  const closeModal = () => {
    if (isTaken) {
      return;
    }
    onClose();
  };

  return createPortal(
    <div className='modal_overlay' onClick={closeModal}>
      <div className='modal_popup' onClick={(event) => event.stopPropagation()}>
        <div className='modal_content'>{children}</div>
        <div className='modal_controls'>
          {endDate ? (
            <div className='modal_countdown_wrapper'>
              <CountDown endDate={endDate} id={id} isMouseOver={false} />
            </div>
          ) : (
            <div className='modal_controls_left_side'>
              <img
                className='modal_calendar_image'
                src={calendarImage}
                alt='calendar_image'
              />
              <Input value={inputValue} onChange={onChange} type='date' />
            </div>
          )}
          <button
            className='modal_button'
            onClick={isTaken ? () => navigate(MAINPAGE) : takeBook}
            disabled={isDisabled}
          >
            {isTaken ? 'На главную' : 'Читать'}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
