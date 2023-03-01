import React from 'react';
import styled from '@emotion/styled';

import { CARD_COMPANIES, CARD_COMPANIES_ARRAY } from '@/constants';
import ColorCircleRadio from './ColorCircleRadio';
import { ACTION, useCardFieldDispatchContext } from '../CardFieldContext';
import { ModalChildrenProps } from '@/components/Modal/BottomModal';

type CardCompanySelectModalProps = {
  selectedCardCompany: keyof typeof CARD_COMPANIES | null;
};
const CardCompanySelectFormModal = ({
  selectedCardCompany,
  onClose,
}: ModalChildrenProps & CardCompanySelectModalProps) => {
  const dispatch = useCardFieldDispatchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as keyof typeof CARD_COMPANIES;
    if (!isCompanyName(value)) return;
    dispatch(ACTION.UPDATE_CARD_COMPANY(value));
    onClose();
  };

  return (
    <CardCompanySelectModalContainer>
      {CARD_COMPANIES_ARRAY.map((company) => (
        <ColorCircleRadio
          key={company}
          onChange={handleChange}
          checked={selectedCardCompany === company}
          label={CARD_COMPANIES[company].name}
          value={company}
          name="cardCompany"
          color={CARD_COMPANIES[company].color}
        />
      ))}
    </CardCompanySelectModalContainer>
  );
};

export default CardCompanySelectFormModal as React.FC<CardCompanySelectModalProps>;

const CardCompanySelectModalContainer = styled.form`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  align-items: flex-start;
`;

const isCompanyName = (name: string): name is keyof typeof CARD_COMPANIES => {
  return name in CARD_COMPANIES;
};
