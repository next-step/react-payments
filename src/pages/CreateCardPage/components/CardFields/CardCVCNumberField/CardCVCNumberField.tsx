import React from 'react';
import styled from '@emotion/styled';

import { Label, TextInput } from '@/components';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { LABEL_TEXT } from '@/constants/createCard';
import { Colors } from '@/styles/colors';
import { CircleQuestionIcon } from '@/assets';

type CardCVCNumberFieldProps = {
  cvc: string;
  fontColor: Colors;
};

const CardCVCNumberField = ({ cvc, fontColor }: CardCVCNumberFieldProps) => {
  const CVC_NUMBER_LIMIT = 3;
  const CVC_NUMBER_INPUT_WIDTH = '84px';

  const dispatch = useCardFieldDispatchContext();

  const handleChange = (value: string) => {
    if (dispatch === null) return;

    dispatch(ACTION.UPDATE_CARD_CVC(value));
  };

  return (
    <Label labelText={LABEL_TEXT.CVC}>
      <CardCVCNumberInputContainer>
        <TextInput
          fontColor={fontColor}
          inputMode="numeric"
          width={CVC_NUMBER_INPUT_WIDTH}
          type="password"
          maxLength={CVC_NUMBER_LIMIT}
          label="cvc"
          onChange={handleChange}
          textAlign="center"
          value={cvc}
        />
        <CircleQuestionIcon />
      </CardCVCNumberInputContainer>
    </Label>
  );
};

export default React.memo(CardCVCNumberField);

const CardCVCNumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  svg {
    margin-left: 8px;
  }
`;
