import { useCallback, useMemo, useState } from 'react';

import { CardForm, CreditCard, TopNavigation } from '@/components';
import { Button } from '@/components/UI';
import { useRouter } from '@/hooks/useRouter';
import { styled } from '@/lib/stitches.config';
import { getItem, setItem } from '@/storage/storage';
import { CardKey, CardObj } from '@/types';
export const initialCardState = {
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
    val: '',
    isValid: false,
  },
  [CardKey.OWNER_NAME]: {
    val: '',
    isValid: false,
  },
} as const;

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

  const handleCardState = useCallback((key: CardKey, state: CardObj) => {
    setCardState((prev) => ({
      ...prev,
      [key]: { ...state },
    }));
  }, []);

  const isAllValid = Object.values(cardState).every((input) => input.isValid);

  const handleSubmit = () => {
    const newCard = Object.entries(cardState).reduce((acc, cur) => {
      return { ...acc, [cur[0]]: cur[1].val };
    }, {});

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
