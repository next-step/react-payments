import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardAddForm } from '@/context/CardAddForm';

export default function PasswordInputBox() {
  const {
    cardForm: { cardPassword },
    handleChangeCardForm,
  } = useCardAddForm();
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
        onChange={handleChangeCardForm}
        type="password"
        data-type={CARD.PASSWORD.TYPE}
      />
      <Input
        styleType="basic"
        className=" w-15"
        maxLength={CARD.PASSWORD.LENGTH}
        name="num2"
        value={num2}
        onChange={handleChangeCardForm}
        type="password"
        data-type={CARD.PASSWORD.TYPE}
      />

      <Input styleType="fixed" className=" w-15" disabled value="•" type="password" />
      <Input styleType="fixed" className="w-15" disabled value="•" type="password" />
    </Box>
  );
}
