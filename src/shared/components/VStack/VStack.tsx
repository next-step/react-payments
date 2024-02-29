import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type VStackProps = PropsWithChildren<StyleProps & AsProps>;
export const VStack = ({ children, ...props }: VStackProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<VStackProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
`;

VStack.displayName = 'VStack';
