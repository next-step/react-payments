import { useEffect, RefObject } from 'react';

import { CARD } from '@/constants/card';
import { CardNumber } from '@/types/card';

type UseInputFocusProps = {
  cardNumber: CardNumber;
  num1Ref: RefObject<HTMLInputElement>;
  num2Ref: RefObject<HTMLInputElement>;
  num3Ref: RefObject<HTMLInputElement>;
  num4Ref: RefObject<HTMLInputElement>;
};

export default function useInputFocus({ cardNumber, num1Ref, num2Ref, num3Ref, num4Ref }: UseInputFocusProps) {
  const { num1, num2, num3 } = cardNumber;

  useEffect(() => {
    num1Ref.current?.focus();
  }, [num1Ref]);

  useEffect(() => {
    num1.length === CARD.NUMBER.LENGTH && num2Ref.current?.focus();
  }, [num1, num2Ref]);

  useEffect(() => {
    num2.length === CARD.NUMBER.LENGTH && num3Ref.current?.focus();
  }, [num2, num3Ref]);

  useEffect(() => {
    num3.length === CARD.NUMBER.LENGTH && num4Ref.current?.focus();
  }, [num3, num4Ref]);
}
