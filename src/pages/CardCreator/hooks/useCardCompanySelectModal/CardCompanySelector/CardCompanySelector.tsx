import React from 'react';

import { CardCompanyComponent } from './components/CardCompanyComponent';
import { cardCompanyList, CardCompany } from './cardCompanyList';
import { Wrapper, CompaniesWrapper } from './CardCompanySelector.styled';

export interface CardCompanySelectorProps {
  onCardCompanyClick?: (cardCompany: CardCompany) => void;
}

function CardCompanySelector({ onCardCompanyClick }: CardCompanySelectorProps) {
  // FIXME: Context Api를 이용해 불필요한 onClick Props Drilling을 없애기
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <CompaniesWrapper>
        {Object.values(cardCompanyList).map((cardCompany) => (
          <CardCompanyComponent key={cardCompany.name} cardCompany={cardCompany} onClick={onCardCompanyClick} />
        ))}
      </CompaniesWrapper>
    </Wrapper>
  );
}

export { CardCompanySelector };
