import { Box, Input } from '@/components/Common';
import { CARD_PASSWORD } from '@/constants/card';
import { isNumber } from '@/utils';
import { ChangeEvent, useState } from 'react';

export default function CardPasswordInputBox() {
  const [password, setPassword] = useState({
    password1: '',
    password2: '',
  });
  const { password1, password2 } = password;

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (!isNumber(value) && value !== '') return;

    setPassword((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Box title="카드 비밀번호" className="input-container">
      <Input
        className="input-basic w-15"
        maxLength={CARD_PASSWORD.MAX_LENGTH}
        name="password1"
        value={password1}
        onChange={handleChangePassword}
        type="password"
      />
      <Input
        className="input-basic w-15"
        maxLength={CARD_PASSWORD.MAX_LENGTH}
        name="password2"
        value={password2}
        onChange={handleChangePassword}
        type="password"
      />

      <Input className="input-fixed w-15" readOnly value="•" type="password" />
      <Input className="input-fixed w-15" readOnly value="•" type="password" />
    </Box>
  );
}
