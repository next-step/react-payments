import { cls } from '@/utils';
import React from 'react';

type CardProps = {
  size?: 'sm' | 'lg';
};

const getChipSize = (size: string) => {
  return size === 'sm' ? 'top-10 w-10 h-7' : 'top-12 w-14 h-10';
};

function Chip({ size = 'sm' }: CardProps) {
  const chipSize = getChipSize(size);
  return <div className={cls('absolute  left-4 bg-yellow-400 rounded-lg', chipSize)}></div>;
}

export default Chip;
