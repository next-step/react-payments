import styled, { css } from 'styled-components';
import type { CircleProps } from './Dot.types';
import Text from 'components/common/Text/Text';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div<CircleProps>`
  margin: 0.5rem 1rem;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  background-color: #94dacd;
  ${({ color }) =>
    color === 'red'
      ? css`
          background: #e14141;
        `
      : color === 'cyon'
      ? css`
          background: #92e3d5;
        `
      : color === 'blue'
      ? css`
          background: #557ce5;
        `
      : color === 'green'
      ? css`
          background: #73bc6d;
        `
      : color === 'pink'
      ? css`
          background: #e76e9b;
        `
      : color === 'yellow'
      ? css`
          background: #fbcc58;
        `
      : color === 'orange'
      ? css`
          background: #f37e3b;
        `
      : color === 'purple'
      ? css`
          background: #df59ba;
        `
      : css`
          background: #94dacd;
        `}
`;
export const DotText = styled(Text)``;
