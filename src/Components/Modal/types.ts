import React from 'react';

export interface ModalProps {
  onClose?: () => void;
  children?: React.ReactNode;
  onConfirm: () => void;
  controls?: React.ReactNode;
}
