import { Box, Input } from '@/components/Common';
import { CARD_SECRET_CODE } from '@/constants/card';
import { isNumber } from '@/utils';
import { useState, ChangeEvent } from 'react';

export default function CardSecretCodeInputBox() {
  const [secretCode, setSecretCode] = useState('');

  const handleChangeSecretCode = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (!isNumber(value) && value !== '') return;

    setSecretCode(e.target.value);
  };

  return (
    <Box title="보안코드(CVC/CVV)" className="input-container">
      <Input
        className="input-basic w-25"
        maxLength={CARD_SECRET_CODE.MAX_LENGTH}
        value={secretCode}
        onChange={handleChangeSecretCode}
        type="password"
      />
    </Box>
  );
}
