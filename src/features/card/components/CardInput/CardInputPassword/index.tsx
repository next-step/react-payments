import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { MAX_LENGTH_PIECE_PASSWORD } from '@/features/card/constants/maxLength';
import { DISPLAY_SECURITY_CHARACTER } from '@/features/card/constants/display';
import { HFlex } from '@/components/atoms/HFlex';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { VFlex } from '@/components/atoms/VFlex';
import { Box } from '@/components/atoms/Box';

interface Props {
  password: CardInputInterface['password'];
  onChange: (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof CardInputInterface['password'],
  ) => void;
}

const INPUT_ID = 'card-password';

export const CardInputPassword = ({ password, onChange }: Props) => {
  return (
    <VFlex>
      <Label htmlFor={INPUT_ID}>{'카드 비밀번호'}</Label>
      <HFlex className={'gap-2'}>
        <Input
          id={INPUT_ID}
          value={password.first}
          type={'password'}
          className={'w-15'}
          maxLength={MAX_LENGTH_PIECE_PASSWORD}
          onChange={(e) => onChange(e, 'first')}
        />
        <Input
          value={password.second}
          maxLength={MAX_LENGTH_PIECE_PASSWORD}
          type={'password'}
          className={'w-15'}
          onChange={(e) => onChange(e, 'second')}
        />
        <Box className={'input-basic w-15 flex-center bg-white'}>{DISPLAY_SECURITY_CHARACTER}</Box>
        <Box className={'input-basic w-15 flex-center bg-white'}>{DISPLAY_SECURITY_CHARACTER}</Box>
      </HFlex>
    </VFlex>
  );
};
