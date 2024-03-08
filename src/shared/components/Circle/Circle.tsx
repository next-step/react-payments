import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled, styleToken } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type CircleProps = PropsWithChildren<StyleProps & AsProps>;

export const Circle = ({
  children,
  display = 'flex',
  alignItems = 'center',
  justifyContent = 'center',
  width = '37px',
  height = '37px',
  borderRadius = '50%',
  backgroundColor = styleToken.color.gray200,
  ...props
}: CircleProps) => (
  <Root
    as="span"
    display={display}
    alignItems={alignItems}
    justifyContent={justifyContent}
    width={width}
    height={height}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    {...props}
  >
    {children}
  </Root>
);

const Root = styled(DefaultStyled)<CircleProps>``;

Circle.displayName = 'Circle';
