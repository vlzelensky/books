import { SyntheticEvent, useState, useEffect } from 'react';
import { BookI } from 'types';

export const useLazyLoad = (elements: BookI[], elementsPerPage: number) => {
  const savedElementsPerPage = sessionStorage.getItem('elementsPerPage');
  const [data, setData] = useState<BookI[]>(
    elements.slice(
      0,
      savedElementsPerPage ? JSON.parse(savedElementsPerPage) : elementsPerPage
    )
  );

  useEffect(() => {
    setData(
      elements.slice(
        0,
        savedElementsPerPage ? JSON.parse(savedElementsPerPage) : elementsPerPage
      )
    );
  }, [elements]);

  const onScroll = (event: SyntheticEvent<HTMLDivElement>) => {
    const {
      currentTarget: { scrollHeight, clientHeight, scrollTop },
    } = event;
    if (scrollHeight - scrollTop === clientHeight && data.length !== elements.length) {
      setData((prevState) => {
        const nextState = [
          ...prevState,
          ...elements.slice(prevState.length, prevState.length + 3),
        ];
        sessionStorage.setItem('elementsPerPage', JSON.stringify(nextState.length));
        return nextState;
      });
    }
  };

  return { data, onScroll };
};
