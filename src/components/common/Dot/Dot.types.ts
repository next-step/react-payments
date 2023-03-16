import { ColorType, CompanyType } from 'types';

export type CircleProps = {
  color: ColorType;
};

export type DotProps = {
  color: ColorType;
  value: CompanyType;
  className?: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};
