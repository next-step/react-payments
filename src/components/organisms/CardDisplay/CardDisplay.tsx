import { Card } from '@components/molecules/Card/Card';
import { maskText } from '@/utils/maskText';
import { FormValues } from '@/type/formType';

export type CardDisplayProps = {
  size: 'small' | 'big';
  cardInfo: FormValues;
  onOpen?: () => void;
  isHover?: boolean;
};

export default function CardDisplay({
  size = 'small',
  cardInfo,
  onOpen,
  isHover,
}: CardDisplayProps) {
  const {
    cardCompany,
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    cardHolderName,
    expirationMonth,
    expirationYear,
  } = cardInfo;

  const maskedCardNumber3 = maskText(cardNumber3);
  const maskedCardNumber4 = maskText(cardNumber4);

  return (
    <Card.Box onClick={onOpen} isHover={isHover}>
      <Card.Size size={size} backgroundColor={cardCompany.color}>
        <Card.Top>
          <Card.Text fontSize={size}>{cardCompany.name}</Card.Text>
        </Card.Top>

        <Card.Middle>
          <Card.Size size={size} hasChip />
        </Card.Middle>

        <Card.Bottom>
          <Card.Bottom as='number'>
            <Card.Text
              fontSize={size}
            >{`${cardNumber1}  ${cardNumber2}  ${maskedCardNumber3}  ${maskedCardNumber4}`}</Card.Text>
          </Card.Bottom>
          <Card.Bottom as='info'>
            <Card.Text
              fontSize={size}
              className='text-overflow-ellipsis'
              width='80px'
            >
              {cardHolderName || 'NAME'}
            </Card.Text>
            <Card.Text fontSize={size}>
              {`${expirationMonth || 'MM'} / ${expirationYear || 'YY'}`}
            </Card.Text>
          </Card.Bottom>
        </Card.Bottom>
      </Card.Size>
    </Card.Box>
  );
}
