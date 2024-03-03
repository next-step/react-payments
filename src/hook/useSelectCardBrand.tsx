import { useState } from 'react';
import { CARD_BRANDS } from '@/constant';
import { CardBrand } from '@/type';

export const useSelectCardBrand = () => {
  const [cardBrand, setCardBrand] = useState<CardBrand>({ label: '', color: '' });
  const handleCardBrandSelect = (card: CardBrand) => {
    const selectedCardBrand = CARD_BRANDS.find((cardBrand) => cardBrand.label === card.label);
    if (selectedCardBrand) {
      setCardBrand(selectedCardBrand);
    }
  };
  return {
    selected: cardBrand,
    handleSelect: handleCardBrandSelect,
  };
};
