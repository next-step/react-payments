import { PropsWithChildren, forwardRef } from 'react';
import type { ComponentProps } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type BoxProps = PropsWithChildren<StyleProps & AsProps & Omit<ComponentProps<'div'>, 'ref'>>;

const Root = styled(DefaultStyled)<BoxProps>``;

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, ...props }, ref) => (
  <Root ref={ref} {...props}>
    {children}
  </Root>
));

Box.displayName = 'Box';
