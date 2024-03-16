import { useCallback } from 'react';
import { Brand } from '../../../types';
import { CardContext } from '../../../App';

export const useCardBrands = () => {
  const { send } = CardContext.useActorRef();

  const selectBrand = useCallback(
    (brand: Brand) => {
      send({ type: 'cardState.updateCardBrand', value: brand });
    },
    [send]
  );

  return {
    selectBrand,
  };
};
