import { useState, useEffect } from 'react';
import PartFirst from './PartFirst';
import PartSecond from './PartSecond';
import PartThird from './PartThird';

function InfoArea() {
  const [rerenderCount, setRerenderCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRerenderCount((prevCount) => prevCount + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PartFirst key={rerenderCount} />
      <PartSecond />
      <PartThird />
    </>
  );
}

export default InfoArea;
