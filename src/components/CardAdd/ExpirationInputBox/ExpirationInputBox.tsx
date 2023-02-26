import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CardExpiration } from '@/types/card';
import { CARD } from '@/constants/card';

type ExpirationInputBoxTypes = {
  cardExpiration: CardExpiration;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function ExpirationInputBox({ cardExpiration, onChange }: ExpirationInputBoxTypes) {
  const { month, year } = cardExpiration;

  return (
    <Box className="my-4">
      <span className="input-title">만료일</span>
      <Input
        styleType="basic"
        className=" w-25"
        name="month"
        value={month}
        onChange={onChange}
        type="text"
        maxLength={CARD.EXPIRATION.LENGTH}
        placeholder={CARD.EXPIRATION.PLACEHOLDER.MONTH}
      />
      <Input
        styleType="basic"
        className=" w-25"
        name="year"
        value={year}
        onChange={onChange}
        type="text"
        maxLength={CARD.EXPIRATION.LENGTH}
        placeholder={CARD.EXPIRATION.PLACEHOLDER.YEAR}
      />
    </Box>
  );
}
