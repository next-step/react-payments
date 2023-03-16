import React, { memo } from 'react';

import { CardCompany } from './components/CardCompany';
import { cardCompanyList } from './cardCompanyList';
import type { TCardCompany } from './type';
import { StyledCardCompanySelector, StyledCompaniesFlexBox } from './CardCompanySelector.styled';

export interface CardCompanySelectorProps {
  onCardCompanyClick?: (cardCompany: TCardCompany) => void;
}

export const CardCompanySelector = memo(function CardCompanySelector({ onCardCompanyClick }: CardCompanySelectorProps) {
  return (
    <StyledCardCompanySelector onClick={(e) => e.stopPropagation()}>
      <StyledCompaniesFlexBox>
        {Object.values(cardCompanyList).map((cardCompany) => (
          <CardCompany key={cardCompany.name} cardCompany={cardCompany} onClick={onCardCompanyClick} />
        ))}
      </StyledCompaniesFlexBox>
    </StyledCardCompanySelector>
  );
});
