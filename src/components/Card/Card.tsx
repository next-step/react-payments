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

export const Card = (props: CardProps) => {
  const { size, bgColor, company, cardNumber, owner, expiryDate } =
    useCardProps(props);
  return (
    <CardBoxEl>
      <CardEl size={size} bgColor={bgColor}>
        <InnerTop>
          <CardText size={size}>{company}</CardText>
        </InnerTop>

        <InnerMiddle>
          <CardChip size={size} />
        </InnerMiddle>

        <InnerBottom>
          <CardNumber>
            <CardText size={size}>{cardNumber}</CardText>
          </CardNumber>
          <CardInfo>
            <CardText size={size}>{owner}</CardText>
            <CardText size={size}>{expiryDate}</CardText>
          </CardInfo>
        </InnerBottom>
      </CardEl>
    </CardBoxEl>
  );
};

export default Card;
