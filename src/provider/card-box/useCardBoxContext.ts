import { useContext } from 'react';
import { CardBoxContext, ICardBoxContext } from './CardBoxProvider';

export default function useCardBoxContext(): ICardBoxContext {
  return useContext(CardBoxContext);
}
