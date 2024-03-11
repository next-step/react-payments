import styled from '@emotion/styled';
import { InputVariantType } from './Input.type.ts';

export const Container = styled.div`
  width: 100%;
`;

const INPUT_STYLE = {
  DEFAULT: `
  border: none;
  background-color: #ecebf1;
  border-radius: 0.25rem;
  `,
  UNDERLINE: `
  border: none;
  border-bottom: 1px solid black;
  background-color: white;,
  `,
};

export const TextField = styled.input<{ variant: InputVariantType }>`
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  ${({ variant }) => INPUT_STYLE[variant]}
`;
