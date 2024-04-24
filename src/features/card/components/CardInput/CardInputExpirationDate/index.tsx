import { ChangeEvent } from 'react';

import { HFlex } from '@/components/atoms/HFlex';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { VFlex } from '@/components/atoms/VFlex';
import { DISPLAY_EXPIRATION_DATE_COUPLER } from '@/features/card/constants/display';
import { MAX_LENGTH_PIECE_EXPIRATION_DATE } from '@/features/card/constants/maxLength';
import { CardInputInterface } from '@/features/card/types/cardTypes';

interface Props {
  expirationDate: CardInputInterface['expirationDate'];
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof CardInputInterface['expirationDate'],
  ) => void;
}

const INPUT_ID = 'card-expiration-date';

export const CardInputExpirationDate = ({ expirationDate, onChange }: Props) => {
  return (
    <VFlex>
      <Label htmlFor={INPUT_ID}>{'만료일'}</Label>
      <HFlex className={'input-box w-50'}>
        <Input
          id={INPUT_ID}
          value={expirationDate.MM}
          type={'text'}
          placeholder={'MM'}
          maxLength={MAX_LENGTH_PIECE_EXPIRATION_DATE}
          onChange={(e) => onChange(e, 'MM')}
        />
        {expirationDate.MM.length >= MAX_LENGTH_PIECE_EXPIRATION_DATE &&
          DISPLAY_EXPIRATION_DATE_COUPLER}
        <Input
          value={expirationDate.YY}
          type={'text'}
          placeholder={'YY'}
          maxLength={MAX_LENGTH_PIECE_EXPIRATION_DATE}
          onChange={(e) => onChange(e, 'YY')}
        />
      </HFlex>
    </VFlex>
  );
};
