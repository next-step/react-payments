import React from 'react';

import { TCardNicknameProp } from './types';

interface CardNicknameProps {
  nickname?: TCardNicknameProp;
}

export function CardNickname({ nickname }: CardNicknameProps) {
  return <span className="card-nickname">{nickname}</span>;
}
