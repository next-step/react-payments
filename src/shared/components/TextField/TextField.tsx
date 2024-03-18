import { forwardRef, HTMLProps } from 'react';
import styled from '@emotion/styled';
import type { FocusProps, PlaceholderProps, TextFieldVariant } from './TextField.type';
import { DefaultStyled, styleToken } from '@/shared/styles';
import { AsProps, StyleProps } from '@/shared/types';

export type TextFieldProps = StyleProps &
  AsProps &
  HTMLProps<HTMLInputElement> & {
    variant: TextFieldVariant;
    _placeholder?: PlaceholderProps;
    _focus?: FocusProps;
  };

const isValidVariantNoneOutline = (variant: TextFieldVariant): variant is 'filled' | 'flushed' | 'unstyled' =>
  ['filled', 'flushed', 'unstyled'].includes(variant);

const variantStyles = {
  outline: {
    border: `1px solid ${styleToken.color.gray400}`,
    borderRadius: '7px',
  },
  filled: {
    backgroundColor: styleToken.color.gray200,
    border: 'none',
    borderRadius: '7px',
  },
  flushed: {
    border: 'none',
    borderBottom: `2px solid ${styleToken.color.gray600}`,
    borderRadius: '0',
  },
  unstyled: {
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '0',
    padding: '0',
  },
};

const Root = styled(DefaultStyled)<TextFieldProps>`
  ${({ variant }) => variantStyles[variant]};
  ${({ width }) => width && { width }};
  ${({ height }) => height && { height }};
  ${({ padding }) => padding && { padding }};
  ${({ borderRadius }) => borderRadius && { borderRadius }};
  ${({ fontSize }) => fontSize && { fontSize }};

  &::placeholder {
    font-size: ${({ _placeholder }) => _placeholder?.fontSize};
    letter-spacing: ${({ _placeholder }) => _placeholder?.letterSpacing};
    color: ${({ _placeholder }) => _placeholder?.color};
    text-align: ${({ _placeholder }) => _placeholder?.textAlign};
  }

  &:focus-visible {
    ${({ variant }) => variant && isValidVariantNoneOutline(variant) && `outline: none;`};
    outline: ${({ _focus }) => _focus?.outline};
  }
`;

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      type = 'text',
      variant = 'outline',
      width = styleToken.width.w100,
      height = '45px',
      padding = '13px 12px 13px 11px',
      borderRadius = '6px',
      fontSize = '18px',
      ...props
    },
    ref,
  ) => (
    <Root
      as="input"
      ref={ref}
      type={type}
      variant={variant}
      width={width}
      height={height}
      padding={padding}
      borderRadius={borderRadius}
      fontSize={fontSize}
      {...props}
    />
  ),
);

TextField.displayName = 'TextField';
