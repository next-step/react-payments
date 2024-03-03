import { useState } from 'react';

const useExpiration = () => {
  const [expirationDate, setExpirationDate] = useState({
    month: '',
    year: '',
  });

  const handleExpirationDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const isNumber = !Number.isNaN(Number(value));
    if (!isNumber || value.length > 2) return;
    if (name === 'month' && Number(value) > 12) return;

    setExpirationDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    expirationDate,
    handleExpirationDate,
  };
};

export default useExpiration;
