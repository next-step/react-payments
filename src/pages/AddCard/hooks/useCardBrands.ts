import { useCallback } from 'react';
import { Brand } from '../../../types';
import { useCardState } from '../../../providers/CardState/hooks/useCardState';

export const useCardBrands = () => {
  const { setCardState } = useCardState();

  const selectBrand = useCallback(
    (brand: Brand) => {
      setCardState((prev) => ({ ...prev, brand }));
    },
    [setCardState]
  );

  return {
    selectBrand,
  };
};
