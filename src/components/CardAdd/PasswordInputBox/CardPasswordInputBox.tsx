import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CARD_PASSWORD } from '@/constants/card';
import { CardPassword } from '@/types/card';

type CardPasswordInputBoxProps = {
  cardPassword: CardPassword;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CardPasswordInputBox({ cardPassword, onChange }: CardPasswordInputBoxProps) {
  const { num1, num2 } = cardPassword;

  return (
    <Box className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <Input
        className="input-basic w-15"
        maxLength={CARD_PASSWORD.LENGTH}
        name="num1"
        value={num1}
        onChange={onChange}
        type="password"
      />
      <Input
        className="input-basic w-15"
        maxLength={CARD_PASSWORD.LENGTH}
        name="num2"
        value={num2}
        onChange={onChange}
        type="password"
      />

      <Input className="input-fixed w-15" disabled value="•" type="password" />
      <Input className="input-fixed w-15" disabled value="•" type="password" />
    </Box>
  );
}
