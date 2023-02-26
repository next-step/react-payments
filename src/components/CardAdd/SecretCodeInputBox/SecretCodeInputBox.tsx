import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardSecretCodeContext } from '@/context';

export default function SecretCodeInputBox() {
  const { cardSecretCode, handleChangeCardSecretCode } = useCardSecretCodeContext();

  return (
    <Box className="my-4">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <Input
        styleType="basic"
        className=" w-25"
        maxLength={CARD.SECRET_CODE.LENGTH}
        value={cardSecretCode}
        onChange={handleChangeCardSecretCode}
        type="password"
      />
    </Box>
  );
}
