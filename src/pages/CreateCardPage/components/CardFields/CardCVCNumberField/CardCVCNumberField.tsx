import React from 'react';
import styled from '@emotion/styled';

import { Label, TextInput } from '@/components';
import { ReactComponent as CircleQuestion } from '@/assets/circle_question.svg';
import { ACTION, useCardFieldDispatchContext } from '../../CardFieldContext';

type CardCVCNumberFieldProps = {
  cvc: string;
};

const CardCVCNumberField = ({ cvc }: CardCVCNumberFieldProps) => {
  const CVC_NUMBER_LIMIT = 3;

  const dispatch = useCardFieldDispatchContext();

  const handleChange = (value: string) => {
    if (dispatch === null) return;

    dispatch(ACTION.UPDATE_CARD_CVC(value));
  };

  return (
    <Label labelText="보안 코드(CVC/CVV)">
      <CardCVCNumberInputContainer>
        <TextInput
          fontColor="blue"
          inputMode="numeric"
          width="84px"
          type="password"
          maxLength={CVC_NUMBER_LIMIT}
          label="cvc"
          onChange={handleChange}
          textAlign="center"
          value={cvc}
        />
        <CircleQuestion />
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
