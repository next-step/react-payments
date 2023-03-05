import { useState } from 'react';

const useOwner = () => {
  const [owner, setOwner] = useState('');

  const handleChangeOwner: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    setOwner(value);
  };

  return {
    owner,
    handleChangeOwner,
  };
};

export default useOwner;
