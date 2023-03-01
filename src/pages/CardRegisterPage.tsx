import { useCallback, useMemo, useState } from 'react';

import { CardForm, CreditCard } from '@/components';
import { TopNavigation } from '@/components/common';
import { Button } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getItem, setItem } from '@/storage/storage';
import { type CardFormType, CardKey } from '@/types';
export const initialCardState: CardFormType = {
  [CardKey.CARD_NUMBERS]: {
    val: {
      1: '',
      2: '',
      3: '',
      4: '',
    },
    isValid: false,
  },
  [CardKey.EXPIRE_DATE]: {
    val: {
      month: '',
      year: '',
    },
    isValid: false,
  },
  [CardKey.CVC]: {
    val: '',
    isValid: false,
  },
  [CardKey.PASSWORD]: {
    val: {
      1: '',
      2: '',
      3: '',
      4: '',
    },
    isValid: false,
  },
  [CardKey.OWNER_NAME]: {
    val: '',
    isValid: false,
  },
};

export const CardRegisterPage = () => {
  const { go } = useRouter();
  const [cardState, setCardState] = useState(initialCardState);
  const cardDisplayInfo = useMemo(
    () => ({
      [CardKey.CARD_NUMBERS]: cardState[CardKey.CARD_NUMBERS].val,
      [CardKey.OWNER_NAME]: cardState[CardKey.OWNER_NAME].val,
      [CardKey.EXPIRE_DATE]: cardState[CardKey.EXPIRE_DATE].val,
    }),
    [cardState]
  );

  const handleCardState = useCallback(
    <T extends CardKey>(state: typeof initialCardState[T], key: T) => {
      setCardState((prev) => ({
        ...prev,
        [key]: { ...state },
      }));
    },
    []
  );

  const isAllValid = Object.values(cardState).every((input) => input.isValid);

  const handleSubmit = () => {
    const newCard = Object.entries(cardState).reduce(
      (cardState, [cardKey, form]) => {
        return { ...cardState, [cardKey]: form.val };
      },
      {}
    );

    setItem('cardList', [...(getItem('cardList') ?? []), newCard]);
    go('/register-confirm');
  };

  return (
    <CardRegisterPageLayout>
      <TopNavigation />
      <CreditCard cardInfo={cardDisplayInfo} />
      <CardForm onChangeCardForm={handleCardState} />
      <Button disabled={!isAllValid} onClick={handleSubmit}>
        추가하기
      </Button>
    </CardRegisterPageLayout>
  );
};

const CardRegisterPageLayout = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'column',
  alignItems: 'center',
  placeContent: 'end center',
  height: '100%',
  margin: '0 2rem',

  [`& > button`]: {
    position: 'absolute',
    bottom: '1rem',
    right: '0',
  },
});
