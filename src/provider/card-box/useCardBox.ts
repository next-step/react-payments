import { useContext } from 'react';
import { CardBoxContext } from './CardBoxProvider';

export default function useCardBoxContext() {
  return useContext(CardBoxContext);
}