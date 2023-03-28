import React, { memo } from 'react';

import { TCardCompany } from '@/stores/CardContext';
import { cardCompanyList } from '@/pages/CardCreator/constants';

import { CardCompany } from './components/CardCompany';
import { StyledCardCompanySelector, StyledCompaniesFlexBox } from './CardCompanySelector.styled';

export interface CardCompanySelectorProps {
  onCardCompanyClick?: (cardCompany: TCardCompany) => void;
}

export const CardCompanySelector = memo(function CardCompanySelector({ onCardCompanyClick }: CardCompanySelectorProps) {
  return (
    <StyledCardCompanySelector onClick={(e) => e.stopPropagation()}>
      <StyledCompaniesFlexBox>
        {cardCompanyList.map((cardCompany) => (
          <CardCompany key={cardCompany.name} cardCompany={cardCompany} onClick={onCardCompanyClick} />
        ))}
      </StyledCompaniesFlexBox>
    </StyledCardCompanySelector>
  );
});
