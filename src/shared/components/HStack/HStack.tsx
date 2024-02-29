import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type HStackProps = PropsWithChildren<StyleProps & AsProps>;

export const HStack = ({ children, ...props }: HStackProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<HStackProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
`;

HStack.displayName = 'HStack';
