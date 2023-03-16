import type { TextProps } from './Text.types';
import * as Styled from './Text.styles';

const Text = ({ ...props }: TextProps) => {
  return <Styled.Root {...props}>{props.label}</Styled.Root>;
};

export default Text;
