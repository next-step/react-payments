import { ChangeEvent } from 'react';

import { HFlex } from '@/components/atoms/HFlex';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { VFlex } from '@/components/atoms/VFlex';
import { DISPLAY_CARD_NUMBER_COUPLER } from '@/features/card/constants/display';
import { MAX_LENGTH_PIECE_CARD_NUMBER } from '@/features/card/constants/maxLength';
import { CardInputInterface } from '@/features/card/types/cardTypes';

interface Props {
  cardNumber: CardInputInterface['cardNumber'];
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof CardInputInterface['cardNumber'],
  ) => void;
}

const INPUT_ID = 'card-number';

const checkHasCoupler = (
  cardNumber: CardInputInterface['cardNumber'],
  order: Exclude<keyof CardInputInterface['cardNumber'], 'fourth'>,
) => {
  const hasTargetOrderValue = cardNumber[order].length >= MAX_LENGTH_PIECE_CARD_NUMBER;
  if (order === 'first') {
    return hasTargetOrderValue || cardNumber.second || cardNumber.third || cardNumber.fourth;
  }
  if (order === 'second') {
    return hasTargetOrderValue || cardNumber.third || cardNumber.fourth;
  }
  return hasTargetOrderValue || cardNumber.fourth;
};

export const CardInputNumber = ({ cardNumber, onChange }: Props) => {
  const hasFirstCoupler = checkHasCoupler(cardNumber, 'first');
  const hasSecondCoupler = checkHasCoupler(cardNumber, 'second');
  const hasThirdCoupler = checkHasCoupler(cardNumber, 'third');

  return (
    <VFlex>
      <Label htmlFor={INPUT_ID}>{'카드 번호'}</Label>
      <HFlex className={'input-box'}>
        <Input
          id={INPUT_ID}
          value={cardNumber.first}
          type={'text'}
          onChange={(e) => onChange(e, 'first')}
        />
        {hasFirstCoupler && DISPLAY_CARD_NUMBER_COUPLER}
        <Input value={cardNumber.second} type={'text'} onChange={(e) => onChange(e, 'second')} />
        {hasSecondCoupler && DISPLAY_CARD_NUMBER_COUPLER}
        <Input value={cardNumber.third} type={'password'} onChange={(e) => onChange(e, 'third')} />
        {hasThirdCoupler && DISPLAY_CARD_NUMBER_COUPLER}
        <Input
          value={cardNumber.fourth}
          type={'password'}
          onChange={(e) => onChange(e, 'fourth')}
        />
      </HFlex>
    </VFlex>
  );
};
