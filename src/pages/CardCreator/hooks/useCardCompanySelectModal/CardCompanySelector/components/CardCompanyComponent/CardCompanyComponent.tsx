import React from 'react';
import themes from '@/theme/theme';

import type { CardCompany } from '../../cardCompanyList';
import { CardCompanyWrapper, CardCompanyName, CardCompanyColor } from './CardCompanyComponent.styled';

interface CardCompanyComponentProps {
  cardCompany: CardCompany;
  onClick?: (cardCompany: CardCompany) => void;
}

function CardCompanyComponent({ cardCompany, onClick }: CardCompanyComponentProps) {
  return (
    <CardCompanyWrapper
      onClick={() => {
        if (onClick) onClick(cardCompany);
      }}
    >
      <CardCompanyColor className={themes[cardCompany.theme]} />
      <CardCompanyName>{cardCompany.name}</CardCompanyName>
    </CardCompanyWrapper>
  );
}

export { CardCompanyComponent };
