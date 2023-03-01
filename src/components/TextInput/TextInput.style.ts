import styled from '@emotion/styled';

export const StyledTextInput = styled.input<{
  textAlign: 'left' | 'center' | 'right';
  color: string;
  width: string;
}>`
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 12px;
  width: ${({ width }) => width};

  text-align: ${({ textAlign }) => textAlign};
  color: ${({ color }) => color};
`;
