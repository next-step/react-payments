import { ChangeEvent, useCallback } from 'react';

import { MAX_LENGTH_PIECE_CARD_NUMBER } from '@/features/card/constants/maxLength';
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

export const useChangeCardNumber = ({ input, onChange }: Props) => {
  const onChangeNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['cardNumber']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      const isValidChange =
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_CARD_NUMBER,
        }) || checkIsDeleteInputType(nativeEvent as InputEvent);

      if (isValidChange) {
        onChange('cardNumber', { ...input.cardNumber, [section]: value });
      }
    },
    [input.cardNumber, onChange],
  );

  return { onChangeNumber };
};
