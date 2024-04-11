import { ChangeEvent, forwardRef } from 'react';
import styled from '@emotion/styled';

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxInput = styled.input`
  appearance: none;
  border: 1px solid #2ac1bc;
  border-radius: 2px;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:checked {
    background-color: #2ac1bc;
  }

  &:after {
    content: '✔';
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CheckboxLabel = styled.label`
  padding-left: 7px;
`;

type CheckboxProps = {
  id: string;
  label?: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({ id, label, checked, onChange }, ref) => (
  <CheckboxContainer>
    <CheckboxInput type="checkbox" id={id} checked={checked} onChange={onChange} ref={ref} />
    {label && <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>}
  </CheckboxContainer>
));
