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

export const Typography = ({ children, ...props }: TypographyProps) => {
  const { as, variant = 'body', whiteSpace, fontSize, fontWeight, ...restProps } = props;

  const typographyProps = {
    fontSize: fontSize || typographyVariantStyle[variant].fontSize,
    fontWeight: fontWeight || typographyVariantStyle[variant].fontWeight,
    lineHeight: typographyVariantStyle[variant].lineHeight,
    letterSpacing: typographyVariantStyle[variant].letterSpacing,
    whiteSpace: whiteSpace || 'pre-wrap',
  };
  return (
    <Root as="span" variant={variant} {...typographyProps} {...restProps}>
      {children}
    </Root>
  );
};

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

Typography.displayName = 'Typography';
