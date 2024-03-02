import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type GridProps = PropsWithChildren<StyleProps & AsProps>;
export const Grid = ({ children, ...props }: GridProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<GridProps>`
  display: grid;
`;

Grid.displayName = 'Grid';
