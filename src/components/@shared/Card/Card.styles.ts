import styled from "@emotion/styled";

import { CardSize, CardType } from "../../../@types";
import { CARD_COLOR, CARD_SIZE } from "../../../constants/card";

interface CardSizeProp {
  size: CardSize;
}

interface ContainerProps extends CardSizeProp {
  type?: CardType;
}

const Container = styled.div<ContainerProps>`
  ${({ size, type }) => `
    width: ${CARD_SIZE[size].WIDTH};
    height: ${CARD_SIZE[size].HEIGHT};
    padding: ${CARD_SIZE[size].PADDING};
    font-size: ${CARD_SIZE[size].FONT_SIZE};
    background-color: ${CARD_COLOR[type ?? "DEFAULT"]};
  `}

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #3f3f3f;

  user-select: none;
`;

const Chip = styled.div<CardSizeProp>`
  ${({ size }) => `
    width: ${CARD_SIZE[size].CHIP_WIDTH};
    height: ${CARD_SIZE[size].CHIP_HEIGHT};
  `}

  margin: 11% 0 6%;
  background-color: #cbba64;
  border-radius: 4px;
`;

const CardName = styled.div`
  font-size: 0.7em;
  height: 13%;
`;

const CardNumber = styled.ul`
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    letter-spacing: 0.2em;
    margin: 0 5px;
    width: 20%;
    font-weight: 600;
  }
`;

const NumberDot = styled.div`
  width: 0.3em;
  height: 0.3em;
  margin: 0 2px;
  background-color: #3f3f3f;
  border-radius: 50%;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  margin-top: 4%;
  letter-spacing: 0.05em;
  font-weight: 600;
`;

export default {
  Container,
  Chip,
  CardName,
  CardNumber,
  NumberDot,
  CardFooter,
};
