import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type BoxProps = PropsWithChildren<StyleProps & AsProps>;

export const Box = ({ children, ...props }: BoxProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<BoxProps>``;

Box.displayName = 'Box';
