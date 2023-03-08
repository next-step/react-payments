import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { ICardDTO } from '../../domain/types';
import { cardRepository } from '../../repositories';
import card from '../../components/atoms/card';

export default function useCardRegister() {
  const [searchParams] = useSearchParams();
  const cardNumber = searchParams.get('card');
  const cardList = useMemo<ICardDTO[]>(() => cardRepository.getItem(), []);

  const findCard = useCallback((cardNumber?: string) => {
    return cardList.find((item) => item.cardNumber === cardNumber);
  }, []);

  return {
    cardNumber,
    cardList,
    findCard
  };
}
