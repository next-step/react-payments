import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardOwnerNameContext } from '@/context';

export default function OwnerNameInputBox() {
  const { cardOwnerName, handleChangeCardOwnerName } = useCardOwnerNameContext();
  const subTitle = `${cardOwnerName.length}/${CARD.OWNER_NAME.LENGTH}`;

  return (
    <Box className="my-4">
      <Box display="flex" justify="between" align="center" className="flex-between">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">{subTitle}</span>
      </Box>
      <Input
        styleType="basic"
        type="text"
        maxLength={CARD.OWNER_NAME.LENGTH}
        value={cardOwnerName}
        onChange={handleChangeCardOwnerName}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Box>
  );
}
