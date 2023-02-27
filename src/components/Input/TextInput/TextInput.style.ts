import { Colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const StyledTextInput = styled.input<{
  textAlign: 'left' | 'center' | 'right';
  fontColor: Colors;
  width: string;
}>`
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.colors.gray1};
  padding: 12px;
  width: ${({ width }) => width};

  text-align: ${({ textAlign }) => textAlign};
  color: ${({ fontColor, theme }) => theme.colors[fontColor]};
`;
