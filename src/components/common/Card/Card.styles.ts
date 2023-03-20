import styled, { css } from 'styled-components';
import type { ContainerProps } from './Card.types';
import Text from 'components/common/Text/Text';
import IconButton from 'components/common/IconButton/IconButton';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
  border-radius: 5px;
  padding: 0px 10px;
  cursor: pointer;

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
          background: #e5e5e5;
        `}
  ${({ size }) =>
    size === 'small'
      ? css`
          width: 208px;
          height: 130px;
        `
      : css`
          width: 290px;
          height: 180px;
        `}
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const Middle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-left: ${(props) => (props.theme !== 'add' ? '30px' : '0px')};
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const Chip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;
  background-color: #cbba64;
  border-radius: 4px;
`;
export const CardText = styled(Text)``;
export const CardButton = styled(IconButton)``;
