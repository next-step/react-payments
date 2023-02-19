import { ChangeEvent } from 'react';

import { Box, Input } from '@/components/Common';
import { CardOwnerName } from '@/types/card';
import { CARD_OWNER_NAME } from '@/constants/card';

type CardOwnerNameInputBoxProps = {
  cardOwnerName: CardOwnerName;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CardOwnerNameInputBox({ cardOwnerName, onChange }: CardOwnerNameInputBoxProps) {
  const subTitle = `${cardOwnerName.length}/${CARD_OWNER_NAME.MAX_LENGTH}`;

  return (
    <Box title="카드 소유자 이름(선택)" subTitle={subTitle} className="input-container">
      <Input
        type="text"
        className="input-basic"
        maxLength={CARD_OWNER_NAME.MAX_LENGTH}
        value={cardOwnerName}
        onChange={onChange}
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </Box>
  );
}
