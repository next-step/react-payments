import { ChangeEvent, useRef } from 'react';

import { Box, Input } from '@/components/Common';
import { CardNumber } from '@/types/card';
import { CARD } from '@/constants/card';
import { useInputFocus } from '@/hooks/card';

type NumberInputProps = {
  cardNumber: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function NumberInputBox({ cardNumber, onChange }: NumberInputProps) {
  const { num1, num2, num3, num4 } = cardNumber;

  const num1Ref = useRef<HTMLInputElement>(null);
  const num2Ref = useRef<HTMLInputElement>(null);
  const num3Ref = useRef<HTMLInputElement>(null);
  const num4Ref = useRef<HTMLInputElement>(null);

  useInputFocus({ cardNumber, num1Ref, num2Ref, num3Ref, num4Ref });

  return (
    <Box className="input-container">
      <span className="input-title">카드 번호</span>
      <Input
        type="number"
        name="num1"
        ref={num1Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num1}
        onChange={onChange}
        className="input-basic w-25"
      />
      <Input
        type="number"
        name="num2"
        ref={num2Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num2}
        onChange={onChange}
        className="input-basic w-25"
      />
      <Input
        type="password"
        name="num3"
        ref={num3Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num3}
        onChange={onChange}
        className="input-basic w-25"
      />
      <Input
        type="password"
        name="num4"
        ref={num4Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num4}
        onChange={onChange}
        className="input-basic w-25"
      />
    </Box>
  );
}
