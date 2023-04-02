import React from 'react';

import { routes } from '@/router';

import { StyledEmptyCard, StyledEmptyCardWrapper } from './EmptyCard.styled';

export function EmptyCard() {
  return (
    <StyledEmptyCardWrapper to={routes.cardCreator}>
      <StyledEmptyCard>+</StyledEmptyCard>
    </StyledEmptyCardWrapper>
  );
}
