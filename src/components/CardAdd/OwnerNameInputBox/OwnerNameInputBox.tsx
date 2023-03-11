import { Box, Input } from '@/components/Common';
import { CARD } from '@/constants/card';
import { useCardAddForm } from '@/context/CardAddForm';

export default function OwnerNameInputBox() {
  const {
    cardForm: { cardOwnerName },
    handleChangeCardForm,
  } = useCardAddForm();

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
        onChange={handleChangeCardForm}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        data-type={CARD.OWNER_NAME.TYPE}
      />
    </Box>
  );
}
