import React from 'react';
import { styled } from '@/stitches.config';

import { TCardOwnerNameProp } from './types';

const StyledCardOwnerName = styled('span', {
  maxWidth: '75%',
  overflowX: 'hidden',
  textOverflow: 'ellipsis',
});

interface CardOwnerNameProps {
  ownerName?: TCardOwnerNameProp;
}

export function CardOwnerName({ ownerName }: CardOwnerNameProps) {
  return <StyledCardOwnerName className="card-text card-name-spacing">{ownerName || 'NAME'}</StyledCardOwnerName>;
}
