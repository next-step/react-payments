import { Colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const StyledTextInput = styled.input<{
  textAlign: 'left' | 'center' | 'right';
  fontColor: Colors;
  width: string;
  isError?: boolean;
}>`
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 12px;
  width: ${({ width }) => width};
  border: ${({ isError, theme }) =>
    isError ? `1.5px solid ${theme.colors.error}` : 'none'};

  text-align: ${({ textAlign }) => textAlign};
  color: ${({ fontColor, theme }) => theme.colors[fontColor]};
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: 10px;
  margin-top: 4px;
`;
