import { FC } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps } from './types';

import './styles.css';

export const Modal: FC<ModalProps> = ({ visible, children }) =>
  visible
    ? createPortal(
        <div className='modal_overlay'>
          <div className='modal_popup'>{children}</div>
        </div>,
        document.body
      )
    : null;
