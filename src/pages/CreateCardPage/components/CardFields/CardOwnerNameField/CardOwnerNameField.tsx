import React from 'react';

import { Label, TextInput } from '@/components';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { Colors } from '@/styles/colors';
import { LABEL_TEXT, PLACEHOLDER_TEXT } from '@/constants';

type CardOwnerNameFieldProps = {
  ownerName: string;
  fontColor: Colors;
};
const CardOwnerNameField = ({
  ownerName,
  fontColor,
}: CardOwnerNameFieldProps) => {
  const TEXT_LIMIT = 30;

  const dispatch = useCardFieldDispatchContext();

  const handleOwnerNameChange = (value: string) => {
    dispatch && dispatch(ACTION.UPDATE_CARD_OWNER_NAME(value));
  };

  return (
    <Label
      labelText={LABEL_TEXT.CARD_OWNER_NAME}
      textLength={ownerName.length}
      textLimit={TEXT_LIMIT}
    >
      <TextInput
        maxLength={30}
        fontColor={fontColor}
        label="ownerName"
        value={ownerName}
        placeholder={PLACEHOLDER_TEXT.CARD_OWNER_NAME}
        onChange={handleOwnerNameChange}
        textAlign="left"
      />
    </Label>
  );
};

export default React.memo(CardOwnerNameField);
