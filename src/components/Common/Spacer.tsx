import { cls } from '@/utils';
import React from 'react';

const spaceSizeMap = {
  sm: 'p-5',
  md: 'p-10',
  lg: 'p-10',
};

type Space = keyof typeof spaceSizeMap;

type SpacerProps = {
  space?: Space;
  custom?: number;
};

const DEFAULT_SPACE_SIZE = 'p-10';

const getCustom = (custom: number) => `p-[${custom}px]`;

function Spacer({ space = 'md', custom = 0 }: SpacerProps) {
  const requireSpace = spaceSizeMap[space] ?? DEFAULT_SPACE_SIZE;
  const customSpace = getCustom(custom);

  return <div className={cls(requireSpace, customSpace)} />;
}

export default Spacer;
