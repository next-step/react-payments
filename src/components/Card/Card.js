import styled from "@emotion/styled";

import CardItem from "../CardItem";

const Card = ({ card }) => {
  const { name, numbers, owner, expiryDate, nickname } = card;

  const data = { name, numbers, owner, expiryDate };

  return (
    <Wrap>
      <CardItem data={data} />
      <Nickname>{nickname}</Nickname>
    </Wrap>
  );
};

const Wrap = styled.li`
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
