import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardPasswordContext } from '@/context';

export default function PasswordInputBox() {
  const { cardPassword, handleChangeCardPassword } = useCardPasswordContext();
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
        onChange={handleChangeCardPassword}
        type="password"
      />
      <Input
        styleType="basic"
        className=" w-15"
        maxLength={CARD.PASSWORD.LENGTH}
        name="num2"
        value={num2}
        onChange={handleChangeCardPassword}
        type="password"
      />

      <Input styleType="fixed" className=" w-15" disabled value="•" type="password" />
      <Input styleType="fixed" className="w-15" disabled value="•" type="password" />
    </Box>
  );
}
