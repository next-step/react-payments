import type { ButtonProps } from './Button.types';
import * as Styled from './Button.styles';

export const Button = ({ ...props }: ButtonProps) => {
  return <Styled.CommonButton {...props}>{props.label}</Styled.CommonButton>;
};
export default Button;
