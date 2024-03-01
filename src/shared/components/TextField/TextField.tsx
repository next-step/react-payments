import { forwardRef, HTMLProps } from 'react';
import styled from '@emotion/styled';
import type { FocusProps, PlaceholderProps, TextFieldVariant } from './TextField.type';
import { DefaultStyled, styleToken } from '@/shared/styles';
import { AsProps, StyleProps } from '@/shared/types';

type TextFieldProps = StyleProps &
  AsProps &
  HTMLProps<HTMLInputElement> & {
    variant?: TextFieldVariant;
    _placeholder?: PlaceholderProps;
    _focus?: FocusProps;
  };

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const { type, variant, ...restProps } = props;
  return <Root as="input" type={type || 'text'} variant={variant || 'outline'} ref={ref} {...restProps} />;
});

const Root = styled(DefaultStyled)<TextFieldProps>`
  width: ${styleToken.width.w100};
  height: 45px;
  padding: 13px 12px 13px 11px;
  border-radius: 6px;
  font-size: 18px;
  ${({ variant }) => variantStyles[variant || 'outline']};

  &::placeholder {
    letter-spacing: ${({ _placeholder }) => _placeholder?.letterSpacing};
    color: ${({ _placeholder }) => _placeholder?.color};
    text-align: ${({ _placeholder }) => _placeholder?.textAlign};
  }

  &:focus-visible {
    ${({ variant }) => variant && isValidVariantNoneOutline(variant) && `outline: none;`};
    outline: ${({ _focus }) => _focus?.outline};
  }
`;

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
    border: 'none',
    borderRadius: '0',
    padding: '0',
  },
};

const isValidVariantNoneOutline = (variant: TextFieldVariant): variant is 'filled' | 'flushed' | 'unstyled' =>
  ['filled', 'flushed', 'unstyled'].includes(variant);
