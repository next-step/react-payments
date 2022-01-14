import styled from "@emotion/styled";

import Card from "../Card";

const CardList = ({ cards }) => {
  return (
    <List>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </List>
  );
};

const List = styled.ul`
  margin: auto;
`;

export default CardList;
