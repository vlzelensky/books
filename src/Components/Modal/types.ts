import React from 'react';

export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  onConfirm: () => void;
}
