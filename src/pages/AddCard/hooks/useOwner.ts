import { useState } from 'react';

const useOwner = () => {
  const [owner, setOwner] = useState<string>('');

  const handleOnwer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(e.target.value);
  };

  return {
    owner,
    handleOnwer,
  };
};

export default useOwner;
