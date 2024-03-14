import { ChangeEvent, useCallback, useState } from 'react';
import { CARD_INPUT } from '@/features/card/constants/cardInputValue';
import {
  MAX_LENGTH_CARD_OWNER_NAME,
  MAX_LENGTH_PIECE_CARD_NUMBER,
  MAX_LENGTH_PIECE_EXPIRATION_DATE,
  MAX_LENGTH_PIECE_PASSWORD,
  MAX_LENGTH_SECURITY_CODE,
} from '@/features/card/constants/maxLength';
import {
  EXPIRATION_DATE_MM_PATTERN,
  NUMBER_PARSABLE_STRING_PATTERN,
} from '@/features/card/constants/regExp';

import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { Validator } from '@/features/card/lib/Validator';
import { EventChecker } from '@/features/card/lib/EventChecker';

import { formattedExpirationDateMM } from '@/features/card/utils/formattedString';

const checkIsValidPatternAndLength = ({
  value,
  regExp,
  length,
  event,
}: {
  value: string;
  regExp: RegExp;
  length: number;
  event: InputEvent;
}) => {
  return (
    (Validator.checkIsValidPattern(value, regExp) && Validator.checkIsValidLength(value, length)) ||
    EventChecker.checkIsDeleteInputType(event)
  );
};

export const useCardInput = () => {
  const [input, setInput] = useState(CARD_INPUT);

  const onChange = <T extends keyof CardInputInterface>(
    prop: keyof CardInputInterface,
    nextVal: CardInputInterface[T],
  ) => {
    setInput((prev) => ({ ...prev, [prop]: nextVal }));
  };

  const onChangeNumber = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['cardNumber']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_CARD_NUMBER,
          event: nativeEvent as InputEvent,
        })
      ) {
        onChange('cardNumber', { ...input.cardNumber, [section]: value });
      }
    },
    [input.cardNumber],
  );

  const onChangeExpirationDate = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['expirationDate']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: section === 'MM' ? EXPIRATION_DATE_MM_PATTERN : NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_EXPIRATION_DATE,
          event: nativeEvent as InputEvent,
        })
      ) {
        onChange('expirationDate', {
          ...input.expirationDate,
          [section]: section === 'MM' ? formattedExpirationDateMM(value) : value,
        });
      }
    },
    [input.expirationDate],
  );

  const onChangeOwner = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!Validator.checkIsValidLength(value, MAX_LENGTH_CARD_OWNER_NAME)) {
      return;
    }

    onChange('ownerName', value);
  }, []);

  const onChangeSecurityCode = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
      nativeEvent,
    } = e;

    if (
      checkIsValidPatternAndLength({
        value,
        regExp: NUMBER_PARSABLE_STRING_PATTERN,
        length: MAX_LENGTH_SECURITY_CODE,
        event: nativeEvent as InputEvent,
      })
    ) {
      onChange('securityCode', value);
    }
  }, []);

  const onChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>, section: keyof CardInputInterface['password']) => {
      const {
        target: { value },
        nativeEvent,
      } = e;

      if (
        checkIsValidPatternAndLength({
          value,
          regExp: NUMBER_PARSABLE_STRING_PATTERN,
          length: MAX_LENGTH_PIECE_PASSWORD,
          event: nativeEvent as InputEvent,
        })
      ) {
        onChange('password', { ...input.password, [section]: value });
      }
    },
    [input.password],
  );

  return {
    input,
    onChangeNumber,
    onChangeExpirationDate,
    onChangeOwner,
    onChangeSecurityCode,
    onChangePassword,
  };
};
