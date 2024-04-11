import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { DefaultStyled, styleToken } from '@/shared/styles';
import type { AsProps, StyleProps } from '@/shared/types';

type CircleProps = PropsWithChildren<
  StyleProps &
    AsProps & {
      size?: string;
      onClick?: () => void;
      onBlur?: () => void;
      onFocus?: () => void;
      tabIndex?: number;
    }
>;

const Root = styled(DefaultStyled)<CircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: ${({ border }) => border};
  cursor: ${({ cursor }) => cursor};

  &:focus {
    outline: none;
  }
`;

export const Circle = ({
  children,
  size = '37px',
  borderRadius = '50%',
  backgroundColor = styleToken.color.gray200,
  border,
  cursor,
  onClick,
  onBlur,
  onFocus,
  tabIndex,
  ...props
}: CircleProps) => (
  <Root
    as="span"
    size={size}
    borderRadius={borderRadius}
    backgroundColor={backgroundColor}
    border={border}
    cursor={cursor}
    onClick={onClick}
    onBlur={onBlur}
    onFocus={onFocus}
    tabIndex={tabIndex}
    {...props}
  >
    {children}
  </Root>
);

Circle.displayName = 'Circle';
