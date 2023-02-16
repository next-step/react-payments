import styled from '@emotion/styled';

export const TextInputContainer = styled.div<{
  width: string;
}>`
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: #ecebf1;
  padding: 12px;
  width: ${({ width }) => width};
`;

export const TextInputStyle = styled.input<{
  textAlign: 'left' | 'center' | 'right';
  color: string;
}>`
  text-align: ${({ textAlign }) => textAlign};
  width: 100%;
  color: ${({ color }) => color};
  background-color: transparent;
`;
