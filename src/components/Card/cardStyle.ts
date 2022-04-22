import { CardProps, cardSize } from './type';
import styled, { css } from 'styled-components';

export const CardBoxEl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const CardEl = styled.div<Pick<CardProps, 'size' | 'bgColor'>>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ size }) => css`
    ${size === 'small' &&
    `
      width: 208px;
      height: 130px;
    `}
    ${size === 'big' &&
    `
      width: 290px;
      height: 180px;
    `}
  `}

  ${({ bgColor }) => css`
    background: ${bgColor || '#e5e5e5'};
    ${!bgColor &&
    `
      font-size: 30px;
      color: #575757;
    `}
  `}

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const InnerLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const InnerTop = InnerLayout;

export const InnerMiddle = styled(InnerLayout)`
  margin-left: 30px;
`;

export const InnerBottom = styled(InnerLayout)`
  flex-direction: column;
`;

export const CardNumber = styled(InnerLayout)`
  justify-content: center;
`;

export const CardInfo = styled(InnerLayout)`
  justify-content: space-between;
`;

export const CardChip = styled.div<{
  size?: cardSize;
}>`
  ${({ size }) => css`
    ${size === 'small' &&
    `
      width: 40px;
      height: 26px;
    `}
    ${size === 'big' &&
    `
      width: 55.04px;
      height: 35.77px;
    `}
  `}

  background: #cbba64;
  border-radius: 4px;
`;

export const CardText = styled.span<{
  size?: cardSize;
}>`
  margin: 0 16px;
  vertical-align: middle;
  font-weight: 400;
  ${({ size }) => css`
    ${size === 'small' &&
    `
      font-size: 14px;
      line-height: 16px;
    `}
    ${size === 'big' &&
    `
      font-size: 18px;
      line-height: 20px;
    `}
  `}
`;

export const CardItemWrap = styled.div`
  position: relative;
  margin-bottom: 16px;
  a {
    color: #575757;
  }
  .card-nickname {
    text-align: center;
  }
  .btn-delete {
    position: absolute;
    top: 1rem;
    left: -2rem;
    display: inline-flex;
    align-items: center;
    align-content: center;
    width: 20px;
    height: 20px;
    font-size: 0;
    box-shadow: 3px 3px 5px rgb(0 0 0 / 25%);
    border-radius: 10px;
    border: 1px solid #bf2727;
    text-align: center;
    &:before {
      width: 20px;
      height: 20px;

      color: #bf2727;
      box-sizing: border-box;
      line-height: 20px;
      font-size: 1.5rem;
      font-weight: 700;
      content: '-';
    }
  }
`;
