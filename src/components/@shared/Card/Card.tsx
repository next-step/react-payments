import { CardExpiration, CardNumber, CardSize, CardType } from "../../../@types";
import { CARD_NAME } from "../../../constants/card";
import Styled from "./Card.styles";

interface Props {
  size: CardSize;
  cardNumber?: CardNumber;
  cardType?: CardType;
  userName?: string;
  expiration?: CardExpiration;
}

const emptyCardNumber = ["", "", "", ""];

const Card = ({ size, cardNumber, cardType, userName, expiration }: Props) => {
  const [firstNumber, secondNumber, thirdNumber, fourthNumber] = cardNumber ?? emptyCardNumber;

  return (
    <Styled.Container size={size} type={cardType}>
      <Styled.CardName>{cardType && CARD_NAME[cardType]}</Styled.CardName>
      <Styled.Chip size={size} />
      <Styled.CardNumber>
        <li>{firstNumber}</li>
        <li>{secondNumber}</li>
        <li>
          {[...Array(thirdNumber.length)].map((_, index) => (
            <Styled.NumberDot key={index} />
          ))}
        </li>
        <li>
          {[...Array(fourthNumber.length)].map((_, index) => (
            <Styled.NumberDot key={index} />
          ))}
        </li>
      </Styled.CardNumber>
      <Styled.CardFooter>
        <div>{userName}</div>
        <div>
          {expiration?.month}
          {(expiration?.month || expiration?.year) && "/"}
          {expiration?.year}
        </div>
      </Styled.CardFooter>
    </Styled.Container>
  );
};

export default Card;
export { Props };
