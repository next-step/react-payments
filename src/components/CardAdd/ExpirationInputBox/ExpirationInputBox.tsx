import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardAddForm } from '@/context/CardAddForm';

export default function ExpirationInputBox() {
  const {
    cardForm: { cardExpiration },
    handleChangeCardForm,
  } = useCardAddForm();
  const { month, year } = cardExpiration;

  return (
    <Box className="my-4">
      <span className="input-title">만료일</span>
      <Input
        styleType="basic"
        className=" w-25"
        name="month"
        value={month}
        onChange={handleChangeCardForm}
        type="text"
        maxLength={CARD.EXPIRATION.LENGTH}
        placeholder={CARD.EXPIRATION.PLACEHOLDER.MONTH}
        data-type={CARD.EXPIRATION.TYPE}
      />
      <Input
        styleType="basic"
        className=" w-25"
        name="year"
        value={year}
        onChange={handleChangeCardForm}
        type="text"
        maxLength={CARD.EXPIRATION.LENGTH}
        placeholder={CARD.EXPIRATION.PLACEHOLDER.YEAR}
        data-type={CARD.EXPIRATION.TYPE}
      />
    </Box>
  );
}
