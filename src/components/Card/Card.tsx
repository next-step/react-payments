import { CardProps } from './type';
import {
  CardBoxEl,
  CardEl,
  InnerTop,
  InnerMiddle,
  InnerBottom,
  CardNumber,
  CardInfo,
  CardChip,
  CardText,
} from './cardStyle';
import useCardProps from './useCardProps';

const Card = (props: CardProps) => {
  const { size, bgColor, company, cardNumber, owner, expiryDate } =
    useCardProps(props);
  return (
    <CardBoxEl>
      <CardEl size={size} bgColor={bgColor}>
        <InnerTop>
          <CardText>{company}</CardText>
        </InnerTop>

        <InnerMiddle>
          <CardChip />
        </InnerMiddle>

        <InnerBottom>
          <CardNumber>
            <CardText>{cardNumber}</CardText>
          </CardNumber>
          <CardInfo>
            <CardText>{owner}</CardText>
            <CardText>{expiryDate}</CardText>
          </CardInfo>
        </InnerBottom>
      </CardEl>
    </CardBoxEl>
  );
};

export default Card;
