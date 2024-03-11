import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { MAX_LENGTH_PIECE_PASSWORD } from '@/features/card/constants/maxLength';
import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { Box } from '@/shared/components/atoms/Box';
import { Validator } from '@/features/lib/Validator';
import { SECURITY_CHARACTER } from '@/features/card/constants/display';

interface Props {
  password: CardInputInterface['password'];
  onChange: (prop: 'password', nextVal: CardInputInterface['password']) => void;
}

const INPUT_ID = 'card-password';

export const CardInputPassword = ({ password, onChange }: Props) => {
  const onChangePassword = (
    e: ChangeEvent<HTMLInputElement>,
    section: keyof CardInputInterface['password'],
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
      !Validator.checkIsValidLength(value, MAX_LENGTH_PIECE_PASSWORD) &&
      (nativeEvent as InputEvent).inputType !== 'deleteContentBackward'
    ) {
      return;
    }

    onChange('password', { ...password, [section]: value });
  };

  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={INPUT_ID}>{'카드 비밀번호'}</Label>
      <HFlex className={'gap-2'}>
        <Input
          id={INPUT_ID}
          value={password.first}
          type={'password'}
          className={'w-15'}
          maxLength={MAX_LENGTH_PIECE_PASSWORD}
          onChange={(e) => onChangePassword(e, 'first')}
        />
        <Input
          value={password.second}
          maxLength={MAX_LENGTH_PIECE_PASSWORD}
          type={'password'}
          className={'w-15'}
          onChange={(e) => onChangePassword(e, 'second')}
        />
        <Box className={'input-basic w-15 flex-center bg-white'}>{SECURITY_CHARACTER}</Box>
        <Box className={'input-basic w-15 flex-center bg-white'}>{SECURITY_CHARACTER}</Box>
      </HFlex>
    </VFlex>
  );
};
