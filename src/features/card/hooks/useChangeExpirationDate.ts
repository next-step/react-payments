import { ChangeEvent, useCallback } from 'react';

import { MAX_LENGTH_PIECE_EXPIRATION_DATE } from '@/features/card/constants/maxLength';
import {
  EXPIRATION_DATE_MM_PATTERN,
  NUMBER_PARSABLE_STRING_PATTERN,
} from '@/features/card/constants/regExp';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';
import { formattedExpirationDateMM } from '@/features/card/utils/formattedString';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';

interface Props {
  input: CardInputInterface;
  onChange: (
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[keyof CardInputInterface],
  ) => void;
}

export const useChangeExpirationDate = ({ input, onChange }: Props) => {
  const onChangeExpirationDate = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['expirationDate']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      const isValidChange =
        checkIsValidPatternAndLength({
          value,
          regExp: section === 'MM' ? EXPIRATION_DATE_MM_PATTERN : NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_EXPIRATION_DATE,
        }) || checkIsDeleteInputType(nativeEvent as InputEvent);

      if (isValidChange) {
        onChange('expirationDate', {
          ...input.expirationDate,
          [section]: section === 'MM' ? formattedExpirationDateMM(value) : value,
        });
      }
    },
    [input.expirationDate, onChange],
  );

  return { onChangeExpirationDate };
};
