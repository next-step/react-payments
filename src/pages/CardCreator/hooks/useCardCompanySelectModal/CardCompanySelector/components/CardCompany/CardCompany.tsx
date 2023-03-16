import React from 'react';
import themes from '@/theme/theme';

import type { TCardCompany } from '../../type';
import { CardCompanyWrapper, CardCompanyName, CardCompanyColor } from './CardCompany.styled';

interface CardCompanyProps {
  cardCompany: TCardCompany;
  onClick?: (cardCompany: TCardCompany) => void;
}

export function CardCompany({ cardCompany, onClick }: CardCompanyProps) {
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
