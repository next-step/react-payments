import CardList from "../CardList";

import CARDS from "../../../fixtures/cards";

const CardListContainer = () => {
  return (
    <section>
      <h1>보유카드</h1>
      <CardList cards={CARDS} />
    </section>
  );
};

export default CardListContainer;
