import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  return size;
};

export default useWindowSize;
