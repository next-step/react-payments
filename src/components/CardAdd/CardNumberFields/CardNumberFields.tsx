import { useRef } from 'react';

import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useInputFocus } from '@/hooks/card';
import { useCardNumberContext } from '@/context';

export default function CardNumberFields() {
  const { cardNumber, handleChangeCardNumber } = useCardNumberContext();
  const { num1, num2, num3, num4 } = cardNumber;

  const num1Ref = useRef<HTMLInputElement>(null);
  const num2Ref = useRef<HTMLInputElement>(null);
  const num3Ref = useRef<HTMLInputElement>(null);
  const num4Ref = useRef<HTMLInputElement>(null);

  useInputFocus({ cardNumber, num1Ref, num2Ref, num3Ref, num4Ref });

  return (
    <Box className="my-4">
      <span className="input-title">카드 번호</span>
      <Input
        styleType="basic"
        className="w-25"
        type="text"
        name="num1"
        ref={num1Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num1}
        onChange={handleChangeCardNumber}
      />
      <Input
        styleType="basic"
        className="w-25"
        type="text"
        name="num2"
        ref={num2Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num2}
        onChange={handleChangeCardNumber}
      />
      <Input
        styleType="basic"
        className="w-25"
        type="password"
        name="num3"
        ref={num3Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num3}
        onChange={handleChangeCardNumber}
      />
      <Input
        styleType="basic"
        className="w-25"
        type="password"
        name="num4"
        ref={num4Ref}
        maxLength={CARD.NUMBER.LENGTH}
        value={num4}
        onChange={handleChangeCardNumber}
      />
    </Box>
  );
}
