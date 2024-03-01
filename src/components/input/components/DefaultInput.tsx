import { DefaultInputProps } from '../input.type';

export const DefaultInput = ({ className, ...rest }: DefaultInputProps) => {
  return <input className={`input-basic ${className}`} {...rest} />;
};
