import { useState } from 'react';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleIsVisible = () => setIsVisible(!isVisible);

  return { isVisible, handleIsVisible };
};
