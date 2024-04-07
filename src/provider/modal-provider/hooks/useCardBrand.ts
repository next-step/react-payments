import { CardBrand } from '@/domain/type';
import { useState } from 'react';

const initialState = {
  cardBrandName: '',
  color: '',
  pattern: [],
};

const useCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand>({} as CardBrand);

  const handleCardBrand = ({ cardBrandName, color, pattern }: CardBrand) => {
    setCardBrand({ cardBrandName, color, pattern });
  };

  const resetCardBrand = () => {
    setCardBrand(initialState);
  };

  return { cardBrand, handleCardBrand, resetCardBrand };
};

export default useCardBrand;
