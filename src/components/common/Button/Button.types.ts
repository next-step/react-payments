import { FontSizeType } from 'types';
import { ReactEventHandler } from 'react';
export type ButtonProps = {
  fontSize: FontSizeType;
  label: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  className?: string;
};
