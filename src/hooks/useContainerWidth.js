import { useEffect, useState } from 'react';

export const useContainerWidth = (myRef) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const getWidth = () => myRef.current.offsetWidth;

    const handleResize = () => {
      setWidth(getWidth());
    };

    if (myRef.current) {
      setWidth(getWidth());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return width;
};
