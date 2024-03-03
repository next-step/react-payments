import { useState } from 'react';

const useOwner = () => {
  const [owner, setOwner] = useState<string>('');

  const handleOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwner(e.target.value);
  };

  return {
    owner,
    handleOwner,
  };
};

export default useOwner;
