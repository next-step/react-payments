import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type FlexProps = PropsWithChildren<StyleProps & AsProps>;
export const Flex = ({ children, ...props }: FlexProps) => <Root {...props}>{children}</Root>;

const Root = styled(DefaultStyled)<FlexProps>`
  display: flex;
`;

Flex.displayName = 'Flex';
