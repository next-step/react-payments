import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled, styleToken } from '@/shared/styles';
import { AsProps, StyleProps } from '@/shared/types';

export enum TypographyVariants {
  caption = 'caption',
  title = 'title',
  body = 'body',
  subtitle = 'subtitle',
  headline = 'headline',
  display = 'display',
}
export type TypographyVariant = keyof typeof TypographyVariants;

type TypographyProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      variant?: TypographyVariant;
    }
>;

export const Typography = ({ as, variant, children, ...restProps }: TypographyProps) => (
  <Root as="span" variant={variant || 'body'} {...restProps}>
    {children}
  </Root>
);

const Root = styled(DefaultStyled)<TypographyProps>`
  white-space: pre-wrap;
  ${({ variant }) => typographyVariantStyle[variant || 'body']};
`;

export const typographyVariantStyle = {
  title: {
    fontSize: styleToken.fontSize.title,
    fontWeight: styleToken.fontWeight.medium,
    lineHeight: '1.3rem',
    letterSpacing: 'normal',
  },
  body: {
    fontSize: styleToken.fontSize.body,
    fontWeight: styleToken.fontWeight.regular,
    lineHeight: '1.5rem',
    letterSpacing: 'normal',
  },
  headline: {
    fontSize: styleToken.fontSize.headline,
    fontWeight: styleToken.fontWeight.medium,
    lineHeight: '1.3rem',
    letterSpacing: '0.05rem',
  },
  subtitle: {
    fontSize: styleToken.fontSize.subtitle,
    fontWeight: styleToken.fontWeight.regular,
    lineHeight: '1.6rem',
    letterSpacing: '0.02rem',
  },
  caption: {
    fontSize: styleToken.fontSize.caption,
    fontWeight: styleToken.fontWeight.regular,
    lineHeight: '1.4rem',
    letterSpacing: '0.01rem',
  },
  display: {
    fontSize: styleToken.fontSize.display,
    fontWeight: styleToken.fontWeight.medium,
    lineHeight: '1.2rem',
    letterSpacing: '0.1rem',
  },
} as const;

Typography.displayName = 'Typography';
