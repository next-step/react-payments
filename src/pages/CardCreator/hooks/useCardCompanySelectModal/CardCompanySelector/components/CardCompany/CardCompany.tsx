import React from 'react';

import { themes } from '@/theme';
import { CardCompanyInputElement } from '@/stores/CardContext';

import { StyledCardCompany, StyledCardCompanyColor, StyledCardCompanyName } from './CardCompany.styled';

interface CardCompanyProps {
  cardCompany: CardCompanyInputElement;
  onClick?: (cardCompany: CardCompanyInputElement) => void;
}

export function CardCompany({ cardCompany, onClick }: CardCompanyProps) {
  if (!cardCompany?.value) return null;

  return (
    <StyledCardCompany
      onClick={() => {
        if (onClick) onClick(cardCompany);
      }}
    >
      <StyledCardCompanyColor className={themes[cardCompany.value.theme]} />
      <StyledCardCompanyName>{cardCompany?.value?.name}</StyledCardCompanyName>
    </StyledCardCompany>
  );
}
