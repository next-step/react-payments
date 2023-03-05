import { useContext } from 'react';
import { CardContext, ICardContext } from './CardProvider';

export default function useCardContext(): ICardContext {
  return useContext(CardContext);
}
