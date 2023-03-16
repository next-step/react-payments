import { ColorType, CompanyType } from 'types';
import { ReactEventHandler } from 'react';

export type CardProps = {
  size: 'small' | 'big';
  type: 'primary' | 'add';
  className?: string;
  id?: string;
  number?: string;
  expireMonth?: string;
  expireYear?: string;
  ownerName?: string;
  color?: ColorType;
  company?: CompanyType;
  onClick?: ReactEventHandler<HTMLDivElement>;
};
export type ContainerProps = Partial<CardProps>;
