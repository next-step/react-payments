import { cls } from '@/utils';
import React from 'react';

type Space = 'sm' | 'md' | 'lg';

type SpacerProps = {
  space?: Space;
  custom?: number;
};

const getSpace = (space: Space) => {
  switch (space) {
    case 'sm':
      return 'p-5';
    case 'md':
      return 'p-10';
    case 'lg':
      return 'p-20';
    default:
      return 'p-10';
  }
};

const getCustom = (custom: number) => `p-[${custom}px]`;

function Spacer({ space = 'md', custom = 0 }: SpacerProps) {
  const requireSpace = getSpace(space);
  const customSpace = getCustom(custom);

  return <div className={cls(requireSpace, customSpace)} />;
}

export default Spacer;
