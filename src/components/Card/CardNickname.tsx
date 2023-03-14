import React from 'react';

import type { CardNicknameState } from '@/stores/CardCreatorContext/CardCreatorStates';

interface CardNicknameProps {
  nickname?: CardNicknameState;
}

export function CardNickname({ nickname }: CardNicknameProps) {
  return <span className="card-nickname">{nickname?.value}</span>;
}
