import { Colors } from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
type ColorCircleRadioProps = {
  color: Colors;
  label: string;
  value: string;
  checked: boolean;
  name: string;
};
const ColorCircleRadio = ({
  color,
  label,
  value,
  checked,
  name,
}: ColorCircleRadioProps) => {
  return (
    <StyledLabel>
      <ColorCircle
        type="radio"
        color={color}
        value={value}
        defaultChecked={checked}
        name={name}
      />
      {label}
    </StyledLabel>
  );
};

export default React.memo(ColorCircleRadio);

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  flex-direction: column;
  text-align: center;
  &:focus-within {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ColorCircle = styled.input<{ color: Colors }>`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${({ color, theme }) => theme.colors[color]};
  margin-bottom: 8px;
  &:focus-visible {
    outline-offset: 2px;
    outline: ${({ theme }) => `2px dotted ${theme.colors.gray2}`};
  }
  &:checked {
    border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  }
`;
