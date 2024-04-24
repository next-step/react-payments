import { ChangeEvent, useCallback } from 'react';

import { MAX_LENGTH_PIECE_PASSWORD } from '@/features/card/constants/maxLength';
import { NUMBER_PARSABLE_STRING_PATTERN } from '@/features/card/constants/regExp';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';

interface Props {
  input: CardInputInterface;
  onChange: (
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[keyof CardInputInterface],
  ) => void;
}

export const useChangePassword = ({ input, onChange }: Props) => {
  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['password']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      const isValidChange =
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_PASSWORD,
        }) || checkIsDeleteInputType(nativeEvent as InputEvent);

      if (isValidChange) {
        onChange('password', { ...input.password, [section]: value });
      }
    },
    [input.password, onChange],
  );

  return { onChangePassword };
};
