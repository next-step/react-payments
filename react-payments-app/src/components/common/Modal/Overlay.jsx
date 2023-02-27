import { useEffect, useState } from 'react';

const Overlay = ({ onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOverlayClicked = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    onClick(isClicked);
  }, [isClicked]);

  return <div className='modal-dimmed' onClick={handleOverlayClicked}></div>;
};

export default Overlay;
