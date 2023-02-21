import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CardOwnerName } from '@/types/card';
import { CARD } from '@/constants/card';

type OwnerNameInputBoxProps = {
  cardOwnerName: CardOwnerName;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function OwnerNameInputBox({ cardOwnerName, onChange }: OwnerNameInputBoxProps) {
  const subTitle = `${cardOwnerName.length}/${CARD.OWNER_NAME.LENGTH}`;

  return (
    <Box className="input-container">
      <Box className="flex-between">
        <span className="input-title">카드 소유자 이름(선택)</span>
        <span className="input-title">{subTitle}</span>
      </Box>
      <Input
        type="text"
        className="input-basic"
        maxLength={CARD.OWNER_NAME.LENGTH}
        value={cardOwnerName}
        onChange={onChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Box>
  );
}
