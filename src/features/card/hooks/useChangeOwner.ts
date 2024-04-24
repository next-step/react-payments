import { ChangeEvent, useCallback } from 'react';

import { MAX_LENGTH_CARD_OWNER_NAME } from '@/features/card/constants/maxLength';
import { CardInputInterface } from '@/features/card/types/cardTypes';
import { checkIsValidLength } from '@/features/card/utils/validator';

interface Props {
  onChange: (
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[keyof CardInputInterface],
  ) => void;
}

export const useChangeOwner = ({ onChange }: Props) => {
  const onChangeOwner = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!checkIsValidLength(value, MAX_LENGTH_CARD_OWNER_NAME)) {
        return;
      }

      onChange('ownerName', value);
    },
    [onChange],
  );

  return { onChangeOwner };
};
