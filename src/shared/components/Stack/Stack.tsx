import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type StackProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      flexDirection?: StyleProps['flexDirection'];
      spacing?: string;
    }
>;
export const Stack = ({ children, flexDirection = 'column', spacing, ...props }: StackProps) => (
  <Root flexDirection={flexDirection} spacing={spacing} {...props}>
    {children}
  </Root>
);

const Root = styled(DefaultStyled)<StackProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  ${({ flexDirection, spacing }) =>
    flexDirection &&
    spacing &&
    `
    & > * + * {
      ${isValidFlexDirection(flexDirection) && marginMapping[flexDirection]}: ${spacing};
    }
  `}
`;

const marginMapping = {
  column: 'margin-top',
  'column-reverse': 'margin-bottom',
  row: 'margin-left',
  'row-reverse': 'margin-right',
} as const;

const isValidFlexDirection = (flexDirection: string): flexDirection is keyof typeof marginMapping =>
  flexDirection in marginMapping;

Stack.displayName = 'Stack';
