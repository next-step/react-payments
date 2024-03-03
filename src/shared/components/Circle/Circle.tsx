import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled, styleToken } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type CircleProps = PropsWithChildren<StyleProps & AsProps>;

export const Circle = ({ children, ...props }: CircleProps) => {
  const { display, alignItems, justifyContent, width, height, borderRadius, backgroundColor } = props;
  const circleProps = {
    display: display || 'flex',
    alignItems: alignItems || 'center',
    justifyContent: justifyContent || 'center',
    width: width || '37px',
    height: height || '37px',
    borderRadius: borderRadius || '50%',
    backgroundColor: backgroundColor || styleToken.color.gray200,
  };
  return (
    <Root as="span" {...circleProps} {...props}>
      {children}
    </Root>
  );
};

const Root = styled(DefaultStyled)<CircleProps>``;

Circle.displayName = 'Circle';
