import { cls } from '@/utils';
import React from 'react';

type Space = 'sm' | 'md' | 'lg';

type SpacerProps = {
  space?: Space;
  custom?: number;
};

const DEFAULT_SPACE_SIZE = 'p-10' as const;

const spaceSizeMap = {
  sm: 'p-5',
  md: 'p-10',
  lg: 'p-10',
} as const;

const getCustom = (custom: number) => `p-[${custom}px]`;

function Spacer({ space = 'md', custom = 0 }: SpacerProps) {
  const requireSpace = spaceSizeMap[space] ?? DEFAULT_SPACE_SIZE;
  const customSpace = getCustom(custom);

  return <div className={cls(requireSpace, customSpace)} />;
}

export default Spacer;
