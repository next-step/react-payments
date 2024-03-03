import { HTMLProps, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { ButtonHoverProps, ButtonOptionalProps } from './Button.type';
import { getButtonColor } from './Button.util';
import { styleToken } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type ButtonProps = PropsWithChildren<
  StyleProps & AsProps & HTMLProps<HTMLButtonElement> & ButtonOptionalProps & ButtonHoverProps
>;

export const Button = ({ children, type, variant, colorScheme, ...rest }: ButtonProps) => {
  const buttonType = type || 'button';
  const buttonVariant = variant || 'solid';
  const buttonColorScheme = colorScheme || 'teal';
  return (
    <Root type={buttonType} variant={buttonVariant} colorScheme={buttonColorScheme} {...rest}>
      {children}
    </Root>
  );
};

const Root = styled.button<ButtonProps & Required<ButtonOptionalProps> & ButtonHoverProps>`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  text-align: ${({ textAlign }) => textAlign || 'center'};
  padding: 10px 16px;
  border-radius: 4px;
  font-size: ${styleToken.fontSize.subtitle};
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;

  ${({ variant, colorScheme }) => {
    const { backgroundColor, color, border } = getButtonColor(colorScheme, variant, 'default');
    return `
      background-color: ${backgroundColor};
      color: ${color};
      border: ${border};
    `;
  }}
  &:hover {
    ${({ variant, colorScheme }) => {
      const { backgroundColor, color, border } = getButtonColor(colorScheme, variant, 'hover');
      return `
        background-color: ${backgroundColor};
        color: ${color};
        border: ${border};
      `;
    }}
    ${({ _hover }) =>
      _hover &&
      `
      background-color: ${_hover.backgroundColor};
      color: ${_hover.color};
      border: ${_hover.border};
    `};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`};
  ${({ fontSize }) => fontSize && `background-color: ${fontSize};`};
  ${({ padding }) => padding && `padding: ${padding};`};
`;

Button.displayName = 'Button';
