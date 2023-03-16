import React from 'react';

import themes from '@/theme/theme';
import type { TCardCompany } from '@/types';

import { StyledCardCompany, StyledCardCompanyColor, StyledCardCompanyName } from './CardCompany.styled';

interface CardCompanyProps {
  cardCompany: TCardCompany;
  onClick?: (cardCompany: TCardCompany) => void;
}

export function CardCompany({ cardCompany, onClick }: CardCompanyProps) {
  return (
    <StyledCardCompany
      onClick={() => {
        if (onClick) onClick(cardCompany);
      }}
    >
      <StyledCardCompanyColor className={themes[cardCompany.theme]} />
      <StyledCardCompanyName>{cardCompany.name}</StyledCardCompanyName>
    </StyledCardCompany>
  );
}
