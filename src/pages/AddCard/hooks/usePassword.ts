import { useState } from 'react';

const usePassword = () => {
  const [password, setPassword] = useState<Record<string, string>>({
    firstDigit: '',
    secondDigit: '',
  });

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const isNumber = !Number.isNaN(Number(value));
    if (!isNumber || value.length > 1) return;

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    password,
    handlePassword,
  };
};

export default usePassword;
