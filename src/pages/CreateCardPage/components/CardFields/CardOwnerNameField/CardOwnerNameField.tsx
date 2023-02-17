import React from 'react';

import { Label, TextInput } from '@/components';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';

type CardOwnerNameFieldProps = {
  ownerName: string;
};
const CardOwnerNameField = ({ ownerName }: CardOwnerNameFieldProps) => {
  const TEXT_LIMIT = 30;
  const cardOwnerNameLabelText = '카드 소유자 이름 (선택)';
  const cardOwnerNamePlaceholderText =
    '카드에 표시된 이름과 동일하게 입력하세요.';

  const dispatch = useCardFieldDispatchContext();

  const handleOwnerNameChange = (value: string) => {
    dispatch && dispatch(ACTION.UPDATE_CARD_OWNER_NAME(value));
  };

  return (
    <Label
      labelText={cardOwnerNameLabelText}
      textLength={ownerName.length}
      textLimit={TEXT_LIMIT}
    >
      <TextInput
        maxLength={30}
        fontColor="blue"
        label="ownerName"
        value={ownerName}
        placeholder={cardOwnerNamePlaceholderText}
        onChange={handleOwnerNameChange}
        textAlign="left"
      />
    </Label>
  );
};

export default CardOwnerNameField;
