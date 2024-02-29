import { Parser } from '@/utils/parser';
import { DefaultInputProps } from '../input.type';

export const DefaultInput = ({ classNames, ...rest }: DefaultInputProps) => {
  const concatedClassNames = ['input-basic', ...(classNames ?? [])];

  return <input className={Parser.classNames(concatedClassNames)} {...rest} />;
};
