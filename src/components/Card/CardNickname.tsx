import React from 'react';
import { useSelectCardNickname } from '@/stores/CardCreatorContext';

interface CardNicknameProps {}

export function CardNickname(_: CardNicknameProps) {
  const nickname = useSelectCardNickname();

  return <span className="card-nickname">{nickname?.value}</span>;
}
