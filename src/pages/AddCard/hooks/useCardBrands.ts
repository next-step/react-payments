import { useCallback } from 'react';
import { Brand } from '../../../types';
import { CardContext } from '../../../App';

export const useCardBrands = () => {
  const { send } = CardContext.useActorRef();

  const selectBrand = useCallback(
    (brand: Brand) => {
      send({ type: 'UPDATE_BRAND', value: brand });
    },
    [send]
  );

  return {
    selectBrand,
  };
};
