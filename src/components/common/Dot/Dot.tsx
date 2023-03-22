import type { DotProps } from './Dot.types';
import * as Styled from './Dot.styles';

const Dot = ({ className, color, value, onClick }: DotProps) => {
  return (
    <Styled.Layout onClick={onClick} className={className}>
      <Styled.Circle color={color} />
      <Styled.DotText fontSize="s" weight="bold" label={value} />
    </Styled.Layout>
  );
};
export default Dot;
