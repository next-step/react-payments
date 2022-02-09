import styled from "@emotion/styled";

import Card from "../Card";

const CardList = ({ cards }) => (
  <ul>
    {cards.map(({ nickname, ...data }) => (
      <Wrap key={data.id}>
        <Card data={data} />
        <Nickname>{nickname}</Nickname>
      </Wrap>
    ))}
  </ul>
);

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

export default CardList;
