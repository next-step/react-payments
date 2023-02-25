import styled from '@emotion/styled';
import React from 'react';
type ColorCircleRadioProps = {
  color: string;
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
`;

const ColorCircle = styled.input<{ color: string }>`
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-bottom: 8px;
  &:checked {
    border: ${({ theme }) => `2px solid ${theme.colors.primary}`};
  }
`;
