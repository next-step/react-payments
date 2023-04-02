import React from 'react';
import { styled } from '@/stitches.config';

import { TCardNicknameProp } from './types';

const StyledCardNickname = styled('span', {
  fontWeight: 'bold',
  marginTop: '5px',
});

interface CardNicknameProps {
  nickname?: TCardNicknameProp;
}

export function CardNickname({ nickname }: CardNicknameProps) {
  return <StyledCardNickname className="card-nickname">{nickname}</StyledCardNickname>;
}
