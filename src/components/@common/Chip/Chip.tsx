import type { ChipProps } from './Chip.types';
import * as Styled from './Chip.styled';

const Chip = ({ color = 'gray05', children, ...attributes }: ChipProps) => {
  return (
    <Styled.Chip color={color} {...attributes}>
      {children}
    </Styled.Chip>
  );
};

export default Chip;
