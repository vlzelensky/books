import { FC } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './types';
import calendarImage from 'public/images/calendarImage.png';

import './styles.css';

export const Modal: FC<ModalProps> = ({ visible, children, onClose, onConfirm }) => {
  return visible
    ? createPortal(
        <div className='modal_overlay' onClick={onClose}>
          <div className='modal_popup' onClick={(event) => event.stopPropagation()}>
            <div className='modal_content'>{children}</div>
            <div className='modal_controls'>
              <div className='modal_controls_left_side'>
                <img src={calendarImage} alt='calendar_image' />
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
