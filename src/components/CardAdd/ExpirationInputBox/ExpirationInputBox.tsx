import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardExpirationContext } from '@/context';

export default function ExpirationInputBox() {
  const { cardExpiration, handleChangeExpiration } = useCardExpirationContext();
  const { month, year } = cardExpiration;

  return (
    <Box className="my-4">
      <span className="input-title">만료일</span>
      <Input
        styleType="basic"
        className=" w-25"
        name="month"
        value={month}
        onChange={handleChangeExpiration}
        type="text"
        maxLength={CARD.EXPIRATION.LENGTH}
        placeholder={CARD.EXPIRATION.PLACEHOLDER.MONTH}
      />
      <Input
        styleType="basic"
        className=" w-25"
        name="year"
        value={year}
        onChange={handleChangeExpiration}
        type="text"
        maxLength={CARD.EXPIRATION.LENGTH}
        placeholder={CARD.EXPIRATION.PLACEHOLDER.YEAR}
      />
    </Box>
  );
}
