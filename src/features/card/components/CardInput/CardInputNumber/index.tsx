import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { MAX_LENGTH_PIECE_CARD_NUMBER } from '@/features/card/constants/maxLength';
import { DISPLAY_CARD_NUMBER_COUPLER } from '@/features/card/constants/display';
import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

interface Props {
  cardNumber: CardInputInterface['cardNumber'];
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof CardInputInterface['cardNumber'],
  ) => void;
}

const INPUT_ID = 'card-number';

export const CardInputNumber = ({ cardNumber, onChange }: Props) => {
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
        {(cardNumber.first.length >= MAX_LENGTH_PIECE_CARD_NUMBER ||
          cardNumber.second ||
          cardNumber.third ||
          cardNumber.fourth) &&
          DISPLAY_CARD_NUMBER_COUPLER}
        <Input value={cardNumber.second} type={'text'} onChange={(e) => onChange(e, 'second')} />
        {(cardNumber.second.length >= MAX_LENGTH_PIECE_CARD_NUMBER ||
          cardNumber.third ||
          cardNumber.fourth) &&
          DISPLAY_CARD_NUMBER_COUPLER}
        <Input value={cardNumber.third} type={'password'} onChange={(e) => onChange(e, 'third')} />
        {cardNumber.third.length >= MAX_LENGTH_PIECE_CARD_NUMBER ||
          (cardNumber.fourth && DISPLAY_CARD_NUMBER_COUPLER)}
        <Input
          value={cardNumber.fourth}
          type={'password'}
          onChange={(e) => onChange(e, 'fourth')}
        />
      </HFlex>
    </VFlex>
  );
};
