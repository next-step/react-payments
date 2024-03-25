import { CardContext } from "../../../App";

import { CARD_TYPE_LIST } from "features/card/data/cardTypes";
import { CardType } from "features/card/types/card.type";

export default function CardTypeDialog() {
  const cardActionRef = CardContext.useActorRef();

  const handleCardTypeClick = (cardType: CardType) => {
    cardActionRef.send({
      type: "SET_CARD_INFO",
      field: "cardType",
      value: cardType.type,
    });
    cardActionRef.send({ type: "TOGGLE", value: false });
  };

  const renderCardTypes = (cardTypes: CardType[]) => (
    <div className="flex-center">
      {cardTypes.map((cardType) => (
        <div key={cardType.id} className="modal-item-container">
          <div
            className={`modal-item-dot ${cardType.color}`}
            onClick={() => handleCardTypeClick(cardType)}
          />
          <span className="modal-item-name">{cardType.type}</span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="modal-dimmed">
      <div className="modal">
        {renderCardTypes(CARD_TYPE_LIST.slice(0, 4))}
        {renderCardTypes(CARD_TYPE_LIST.slice(4))}
      </div>
    </div>
  );
}
