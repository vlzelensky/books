import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './types';
import calendarImage from 'public/images/calendarImage.png';

import './styles.css';
import { Input } from '../Input';

export const Modal: FC<ModalProps> = ({ visible, children, onClose, onConfirm }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChange = (value: string) => setInputValue(value);

  return visible
    ? createPortal(
        <div className='modal_overlay' onClick={onClose}>
          <div className='modal_popup' onClick={(event) => event.stopPropagation()}>
            <div className='modal_content'>{children}</div>
            <div className='modal_controls'>
              <div className='modal_controls_left_side'>
                <img
                  className='modal_calendar_image'
                  src={calendarImage}
                  alt='calendar_image'
                />
                <Input value={inputValue} onChange={onChange} type='date' />
              </div>
              <button className='button secondary modal_button' onClick={onConfirm}>
                Читать
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};