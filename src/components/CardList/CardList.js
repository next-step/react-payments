import Card from "../Card";

const CardList = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default CardList;
