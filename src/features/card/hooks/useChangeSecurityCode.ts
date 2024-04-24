import { ChangeEvent, useCallback } from 'react';

import { MAX_LENGTH_SECURITY_CODE } from '@/features/card/constants/maxLength';
import { NUMBER_PARSABLE_STRING_PATTERN } from '@/features/card/constants/regExp';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { checkIsDeleteInputType } from '@/features/card/utils/eventTypeChecker';
import { checkIsValidPatternAndLength } from '@/features/card/utils/validator';

interface Props {
  onChange: (
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[keyof CardInputInterface],
  ) => void;
}

export const useChangeSecurityCode = ({ onChange }: Props) => {
  const onChangeSecurityCode = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      const isValidChange =
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_SECURITY_CODE,
        }) || checkIsDeleteInputType(nativeEvent as InputEvent);

      if (isValidChange) {
        onChange('securityCode', value);
      }
    },
    [onChange],
  );

  return { onChangeSecurityCode };
};
