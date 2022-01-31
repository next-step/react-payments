import { ChangeEventHandler, useEffect, useState } from "react";
import { CardType } from "../../@types";
import { CARD_NAME } from "../../constants/card";
import Styled from "./CardTypeRadio.styles";

interface Props {
  selected?: CardType;
  onChange?: (cardType: CardType) => void;
}

const CardTypeRadio = ({ selected = "NONE", onChange }: Props) => {
  const [currentCardType, setCurrentCardType] = useState(selected);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setCurrentCardType(event.target.value as CardType);
  };

  useEffect(() => {
    if (currentCardType !== "NONE") {
      onChange?.(currentCardType);
    }
  }, [currentCardType]);

  return (
    <Styled.Container>
      {(Object.keys(CARD_NAME) as Array<CardType>)
        .filter((type) => type !== "NONE")
        .map((cardType) => (
          <Styled.Label key={cardType}>
            <input
              type="radio"
              name="card-type"
              value={cardType}
              checked={currentCardType === cardType}
              onChange={handleChange}
            />
            <Styled.RadioDisc className="radio-disc" cardType={cardType} />
            <Styled.CardName>{CARD_NAME[cardType]}</Styled.CardName>
          </Styled.Label>
        ))}
    </Styled.Container>
  );
};

export default CardTypeRadio;
export { Props };
