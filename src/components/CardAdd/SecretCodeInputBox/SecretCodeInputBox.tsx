import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { CardSecretCode } from '@/types/card';

type SecretCodeInputBoxProps = {
  cardSecretCode: CardSecretCode;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function SecretCodeInputBox({ cardSecretCode, onChange }: SecretCodeInputBoxProps) {
  return (
    <Box className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <Input
        className="input-basic w-25"
        maxLength={CARD.SECRET_CODE.LENGTH}
        value={cardSecretCode}
        onChange={onChange}
        type="password"
      />
    </Box>
  );
}
