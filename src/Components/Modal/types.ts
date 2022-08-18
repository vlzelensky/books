import React from 'react';
import { BookI } from '../../types';

export interface ModalProps {
  book: BookI;
  onClose: () => void;
  children?: React.ReactNode;
  controls?: React.ReactNode;
}
