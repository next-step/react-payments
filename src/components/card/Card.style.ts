import styled from '@emotion/styled';
import { CardSizeType } from './Card.type.ts';

const CARD_SIZE = {
  SMALL: `
  width: 208px;
  height: 130px;`,
  LARGE: `
  width: 290px;
  height: 180px;`,
};

export const Container = styled.button<{ size: CardSizeType }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px 16px;

  ${({ size }) => CARD_SIZE[size]}

  font-size: 30px;
  color: #575757;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  background: #e5e5e5;
  border-radius: 5px;
  outline: none;
  border: none;
  user-select: none;
  cursor: pointer;
`;

export const Title = styled.strong`
  font-size: 12px;
`;

const CHIP_POSITION = {
  SMALL: 'top: 46px;',
  LARGE: 'top: 64px;',
};
export const Chip = styled.div<{ size: CardSizeType }>`
  position: absolute;
  width: 40px;
  height: 26px;
  left: 16px;
  ${({ size }) => CHIP_POSITION[size]}

  background: #cbba64;
  border-radius: 4px;
`;

export const CardBottomLayout = styled.div`
  width: 100%;
`;

export const CardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  width: 100%;
`;

export const Number = styled.span`
  font-size: 14px;
  letter-spacing: 3px;
`;
