import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled, styleToken } from '@/shared/styles';
import { AsProps, StyleProps } from '@/shared/types';

export enum TypographyVariants {
  caption = 'caption',
  body = 'body',
  subtitle = 'subtitle',
  title = 'title',
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

const Root = styled(DefaultStyled)<TypographyProps>``;

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

export const Typography = ({
  children,
  as = 'span',
  variant = 'body',
  whiteSpace = 'pre-wrap',
  fontSize,
  fontWeight,
  ...props
}: TypographyProps) => {
  const typographyProps = {
    fontSize: fontSize || typographyVariantStyle[variant].fontSize,
    fontWeight: fontWeight || typographyVariantStyle[variant].fontWeight,
    lineHeight: typographyVariantStyle[variant].lineHeight,
    letterSpacing: typographyVariantStyle[variant].letterSpacing,
  };

  return (
    <Root as={as} variant={variant} whiteSpace={whiteSpace} {...typographyProps} {...props}>
      {children}
    </Root>
  );
};

Typography.displayName = 'Typography';
