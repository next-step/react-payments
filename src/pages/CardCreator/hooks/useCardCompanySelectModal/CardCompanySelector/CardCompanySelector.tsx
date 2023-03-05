import React from 'react';

import { CardCompany } from './components/CardCompany';
import { cardCompanyList, CardCompanyModel } from './cardCompanyList';
import { Wrapper, CompaniesWrapper } from './CardCompanySelector.styled';

export interface CardCompanySelectorProps {
  onCardCompanyClick?: (cardCompany: CardCompanyModel) => void;
}

function CardCompanySelector({ onCardCompanyClick }: CardCompanySelectorProps) {
  // FIXME: Context Api를 이용해 불필요한 onClick Props Drilling을 없애기
  // TODO: 세세한 컴포넌트로 나누기
  return (
    <Wrapper onClick={(e) => e.stopPropagation()}>
      <CompaniesWrapper>
        {Object.values(cardCompanyList).map((cardCompany) => (
          <CardCompany key={cardCompany.name} cardCompany={cardCompany} onClick={onCardCompanyClick} />
        ))}
      </CompaniesWrapper>
    </Wrapper>
  );
}

export { CardCompanySelector };
