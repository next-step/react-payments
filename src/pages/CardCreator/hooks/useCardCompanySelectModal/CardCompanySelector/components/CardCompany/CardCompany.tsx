import React from 'react';

import { themes } from '@/theme';
import { TCardCompany } from '@/contexts/CardContext';

import { StyledCardCompany, StyledCardCompanyColor, StyledCardCompanyName } from './CardCompany.styled';

interface CardCompanyProps {
  cardCompany: TCardCompany;
  onClick?: (cardCompany: TCardCompany) => void;
}

export function CardCompany({ cardCompany, onClick }: CardCompanyProps) {
  if (!cardCompany) return null;

  return (
    <StyledCardCompany
      onClick={() => {
        if (onClick) onClick(cardCompany);
      }}
    >
      <StyledCardCompanyColor className={themes[cardCompany.theme]} />
      <StyledCardCompanyName>{cardCompany?.name}</StyledCardCompanyName>
    </StyledCardCompany>
  );
}
