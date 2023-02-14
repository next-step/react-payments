import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CardExpiration } from '@/types/card';
import { CARD_EXPIRATION } from '@/constants/card';

type CardExpirationInputTypes = {
  cardExpiration: CardExpiration;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CardExpirationInputBox({ cardExpiration, onChange }: CardExpirationInputTypes) {
  const { month, year } = cardExpiration;

  return (
    <Box title="만료일" className="input-container">
      <Input
        className="input-basic w-25"
        name="month"
        value={month}
        onChange={onChange}
        type="text"
        maxLength={2}
        placeholder={CARD_EXPIRATION.PLACEHOLDER.MONTH}
      />
      <Input
        className="input-basic w-25"
        name="year"
        value={year}
        onChange={onChange}
        type="text"
        maxLength={2}
        placeholder={CARD_EXPIRATION.PLACEHOLDER.YEAR}
      />
    </Box>
  );
}
