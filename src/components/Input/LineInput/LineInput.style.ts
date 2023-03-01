import { Colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const StyledLineInput = styled.input<{
  textAlign: 'left' | 'center' | 'right';
  fontColor: Colors;
  lineColor: Colors;
  width: string;
}>`
  display: flex;
  align-items: center;
  padding: 12px;
  width: ${({ width }) => width};
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  background: transparent;
  border-bottom: 1px solid ${({ lineColor, theme }) => theme.colors[lineColor]};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ fontColor, theme }) => theme.colors[fontColor]};
`;
