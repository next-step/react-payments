import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type GridProps = PropsWithChildren<StyleProps & AsProps>;

const Root = styled(DefaultStyled)<GridProps>`
  display: grid;
`;

export const Grid = ({ children, ...props }: GridProps) => <Root {...props}>{children}</Root>;

Grid.displayName = 'Grid';
