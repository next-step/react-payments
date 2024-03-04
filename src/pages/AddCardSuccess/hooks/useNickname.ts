import { useState } from 'react';

const useNickname = () => {
  const [nickname, setNickname] = useState<string>('');

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setNickname(value);
  };

  return {
    nickname,
    handleNickname,
  };
};

export default useNickname;
