import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import BaseHeader from "../../components/Header/Header";
import { CARD_COLOR, CARD_SIZE } from "../../constants/card";

const Header = styled(BaseHeader)`
  margin-bottom: 65px;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
  }
`;

const LI = styled.li`
  margin-bottom: 30px;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardName = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #575757;
  text-align: center;
  margin-top: 10px;

  padding: 5px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  color: #8f8f8f;
  font-size: 18px;

  position: absolute;
  top: -20px;
  right: -20px;
`;

const AddCardButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${CARD_SIZE.SMALL.WIDTH};
  height: ${CARD_SIZE.SMALL.HEIGHT};
  padding: ${CARD_SIZE.SMALL.PADDING};
  font-size: ${CARD_SIZE.SMALL.FONT_SIZE};
  background-color: ${CARD_COLOR.NONE};

  border-radius: 5px;
  color: #3f3f3f;

  &:hover {
    filter: brightness(1.03);
  }
`;

export default {
  Header,
  UL,
  LI,
  CardName,
  DeleteButton,
  AddCardButton,
};
