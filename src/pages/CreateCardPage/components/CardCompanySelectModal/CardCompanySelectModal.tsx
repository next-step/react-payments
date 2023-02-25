import React, { FormEventHandler } from 'react';
import styled from '@emotion/styled';

import { CARD_COMPANIES, CARD_COMPANIES_ARRAY } from '@/constants';
import ColorCircleRadio from './ColorCircleRadio';
import { ACTION, useCardFieldDispatchContext } from '../CardFieldContext';

type CardCompanySelectModalProps = {
  selectedCardCompany: keyof typeof CARD_COMPANIES | null;
};
const CardCompanySelectFormModal = (
  { selectedCardCompany }: CardCompanySelectModalProps,
  ref?: React.ForwardedRef<HTMLButtonElement>
) => {
  const dispatch = useCardFieldDispatchContext();
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & {
      cardCompany: {
        value: keyof typeof CARD_COMPANIES;
      };
    };
    dispatch(ACTION.UPDATE_CARD_COMPANY(target.cardCompany.value));
  };
  return (
    <CardCompanySelectModalContainer onSubmit={handleSubmit}>
      {CARD_COMPANIES_ARRAY.map((company) => (
        <ColorCircleRadio
          key={company}
          checked={selectedCardCompany === company}
          label={CARD_COMPANIES[company].name}
          value={company}
          name="cardCompany"
          color={CARD_COMPANIES[company].color}
        />
      ))}
      <StyledSubmitButton ref={ref} type="submit">
        카드회사 제출하기
      </StyledSubmitButton>
    </CardCompanySelectModalContainer>
  );
};

export default React.forwardRef(CardCompanySelectFormModal);

const StyledSubmitButton = styled.button`
  display: none;
`;

const CardCompanySelectModalContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  align-items: flex-start;
`;
