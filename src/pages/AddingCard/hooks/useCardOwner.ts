import { useState } from 'react';

const useCardOwner = () => {
  const [cardOwner, setCardOwner] = useState('');

  const handleChangeCardOwner: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setCardOwner(value);
  };

  return {
    cardOwner,
    handleChangeCardOwner,
  };
};

export default useCardOwner;
