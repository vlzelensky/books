import React from 'react';

export interface ModalProps {
  id: number;
  visible: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  onConfirm: () => void;
  controls?: React.ReactNode;
}
