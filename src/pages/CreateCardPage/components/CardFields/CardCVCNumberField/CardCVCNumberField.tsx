import React from 'react';
import styled from '@emotion/styled';

import { Input, Label } from '@/components';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';
import { LABEL_TEXT } from '@/constants';
import { Colors } from '@/styles/colors';
import { CircleQuestionIcon } from '@/assets';
import { isNotNumber } from '@/utils/validate';

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
    if (isNotNumber(value)) return;

    dispatch(ACTION.UPDATE_CARD_CVC(value));
  };

  return (
    <Label labelText={LABEL_TEXT.CVC}>
      <CardCVCNumberInputContainer>
        <Input.TextInput
          fontColor={fontColor}
          width={CVC_NUMBER_INPUT_WIDTH}
          maxLength={CVC_NUMBER_LIMIT}
          label="cvc"
          onChange={handleChange}
          value={cvc}
          textAlign="center"
          inputMode="numeric"
          type="password"
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
