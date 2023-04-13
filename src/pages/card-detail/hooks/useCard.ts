import { useEffect } from 'react';
import { useCardContext } from '../../../context/CardContext';
import { saveCard } from '../../../domain/payments/cardStorage';
import { THookCard } from '../types';

export default ({ setAlias, aliasRef }: THookCard) => {
  const { card } = useCardContext();

  useEffect(() => {
    card && saveCard(card);

    if (card?.alias) {
      setAlias(card.alias);
      setTimeout(() => {
        aliasRef?.current?.focus();
        aliasRef?.current?.setSelectionRange?.(0, card?.alias?.length || 0);
      });
    }
  }, []);

  return { card };
};
