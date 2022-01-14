import styled from "@emotion/styled";

import CardItem from "../CardItem";

const Card = ({ card }) => {
  const { name, number, owner, expiryDate, nickname } = card;

  const cardItem = { name, number, owner, expiryDate };

  return (
    <Wrap>
      <CardItem cardItem={cardItem} />
      <Nickname>{nickname}</Nickname>
    </Wrap>
  );
};

const Wrap = styled.li`
  & + & {
    margin-top: 20px;
  }
`;

export const Item = styled.div`
  width: 210px;
  height: 130px;
  padding: 15px;
  border-radius: 5px;
  background: #d2d2d2;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  & + & {
    margin-top: 20px;
  }
`;

const Nickname = styled.h2`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  color: #575757;
`;

export default Card;
