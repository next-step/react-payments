import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { CardPassword } from '@/types/card';

type PasswordInputBoxProps = {
  cardPassword: CardPassword;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordInputBox({ cardPassword, onChange }: PasswordInputBoxProps) {
  const { num1, num2 } = cardPassword;

  return (
    <Box className="my-4">
      <span className="input-title">카드 비밀번호</span>
      <Input
        styleType="basic"
        className=" w-15"
        maxLength={CARD.PASSWORD.LENGTH}
        name="num1"
        value={num1}
        onChange={onChange}
        type="password"
      />
      <Input
        styleType="basic"
        className=" w-15"
        maxLength={CARD.PASSWORD.LENGTH}
        name="num2"
        value={num2}
        onChange={onChange}
        type="password"
      />

      <Input styleType="fixed" className=" w-15" disabled value="•" type="password" />
      <Input styleType="fixed" className="w-15" disabled value="•" type="password" />
    </Box>
  );
}
