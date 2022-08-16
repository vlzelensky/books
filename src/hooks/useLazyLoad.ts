import { SyntheticEvent, useState, useEffect } from 'react';
import { BookI } from 'types';

export const useLazyLoad = (elements: BookI[], elementsPerPage: number) => {
  const [data, setData] = useState<BookI[]>(elements.slice(0, elementsPerPage));

  useEffect(() => {
    setData(elements.slice(0, elementsPerPage));
  }, [elements]);

  const onScroll = (event: SyntheticEvent<HTMLDivElement>) => {
    const {
      currentTarget: { scrollHeight, clientHeight, scrollTop },
    } = event;
    if (scrollHeight - scrollTop === clientHeight && data.length !== elements.length) {
      setData((prevState) => [
        ...prevState,
        ...elements.slice(prevState.length, prevState.length + 3),
      ]);
    }
  };

  return { data, onScroll };
};
