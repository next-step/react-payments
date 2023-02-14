import { ChangeEvent, useEffect, useRef } from 'react';

import { Box, Input } from '@/components/Common';
import { CardNumber } from '@/types/card';
import { CARD_NUMBER } from '@/constants/card';

type CardNumberInputProps = {
  cardNumber: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CardNumberInputBox({ cardNumber, onChange }: CardNumberInputProps) {
  const { num1, num2, num3, num4 } = cardNumber;

  const num1Ref = useRef<HTMLInputElement>(null);
  const num2Ref = useRef<HTMLInputElement>(null);
  const num3Ref = useRef<HTMLInputElement>(null);
  const num4Ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    num1Ref.current?.focus();
  }, []);

  useEffect(() => {
    num1.length === CARD_NUMBER.MAX_LENGTH && num2Ref.current?.focus();
  }, [num1]);

  useEffect(() => {
    num2.length === CARD_NUMBER.MAX_LENGTH && num3Ref.current?.focus();
  }, [num2]);

  useEffect(() => {
    num3.length === CARD_NUMBER.MAX_LENGTH && num4Ref.current?.focus();
  }, [num3]);

  return (
    <Box title="카드 번호" className="input-container">
      <Input
        type="text"
        name="num1"
        ref={num1Ref}
        maxLength={CARD_NUMBER.MAX_LENGTH}
        value={num1}
        onChange={onChange}
        className="input-basic w-25"
      />
      <Input
        type="text"
        name="num2"
        ref={num2Ref}
        maxLength={CARD_NUMBER.MAX_LENGTH}
        value={num2}
        onChange={onChange}
        className="input-basic w-25"
      />
      <Input
        type="password"
        name="num3"
        ref={num3Ref}
        maxLength={CARD_NUMBER.MAX_LENGTH}
        value={num3}
        onChange={onChange}
        className="input-basic w-25"
      />
      <Input
        type="password"
        name="num4"
        ref={num4Ref}
        maxLength={CARD_NUMBER.MAX_LENGTH}
        value={num4}
        onChange={onChange}
        className="input-basic w-25"
      />
    </Box>
  );
}
