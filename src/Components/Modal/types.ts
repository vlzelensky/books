import React from 'react';

export interface ModalProps {
  id: number;
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  controls?: React.ReactNode;
}
