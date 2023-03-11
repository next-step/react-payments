import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardAddForm } from '@/context/CardAddForm';

export default function SecretCodeInputBox() {
  const {
    cardForm: { cardSecretCode },
    handleChangeCardForm,
  } = useCardAddForm();

  return (
    <Box className="my-4">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <Input
        styleType="basic"
        className="w-25"
        maxLength={CARD.SECRET_CODE.LENGTH}
        value={cardSecretCode}
        onChange={handleChangeCardForm}
        type="password"
        data-type={CARD.SECRET_CODE.TYPE}
      />
    </Box>
  );
}
