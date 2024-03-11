import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { Validator } from '@/features/lib/Validator';
import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { MAX_LENGTH_PIECE_CARD_NUMBER } from '@/features/card/constants/maxLength';
import { CARD_NUMBER_COUPLER } from '@/features/card/constants/display';

interface Props {
  cardNumber: CardInputInterface['cardNumber'];
  onChange: (prop: 'cardNumber', nextVal: CardInputInterface['cardNumber']) => void;
}

const INPUT_ID = 'card-number';

export const CardInputNumber = ({ cardNumber, onChange }: Props) => {
  const onChangeNumber = (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof CardInputInterface['cardNumber'],
  ) => {
    const {
      target: { value },
      nativeEvent,
    } = e;

    if (
      !Validator.checkIsNumberParsableString(value) &&
      (nativeEvent as InputEvent).inputType !== 'deleteContentBackward'
    ) {
      return;
    }

    if (
      !Validator.checkIsValidLength(value, MAX_LENGTH_PIECE_CARD_NUMBER) &&
      (nativeEvent as InputEvent).inputType !== 'deleteContentBackward'
    ) {
      return;
    }

    onChange('cardNumber', { ...cardNumber, [section]: value });
  };

  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={INPUT_ID}>{'카드 번호'}</Label>
      <HFlex className={'input-box'}>
        <Input
          id={INPUT_ID}
          value={cardNumber.first}
          type={'text'}
          onChange={(e) => onChangeNumber(e, 'first')}
        />
        {(cardNumber.first.length >= MAX_LENGTH_PIECE_CARD_NUMBER ||
          cardNumber.second ||
          cardNumber.third ||
          cardNumber.fourth) &&
          CARD_NUMBER_COUPLER}
        <Input
          value={cardNumber.second}
          type={'text'}
          onChange={(e) => onChangeNumber(e, 'second')}
        />
        {(cardNumber.second.length >= MAX_LENGTH_PIECE_CARD_NUMBER ||
          cardNumber.third ||
          cardNumber.fourth) &&
          CARD_NUMBER_COUPLER}
        <Input
          value={cardNumber.third}
          type={'password'}
          onChange={(e) => onChangeNumber(e, 'third')}
        />
        {cardNumber.third.length >= MAX_LENGTH_PIECE_CARD_NUMBER ||
          (cardNumber.fourth && CARD_NUMBER_COUPLER)}
        <Input
          value={cardNumber.fourth}
          type={'password'}
          onChange={(e) => onChangeNumber(e, 'fourth')}
        />
      </HFlex>
    </VFlex>
  );
};
