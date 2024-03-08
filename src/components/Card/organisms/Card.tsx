import { useFormContext } from '@/context/Form';
import { FormType } from '@/type/formType';
import { maskText } from '@/utils/maskText';
import CardBottom from '@components/Card/atoms/CardBottom';
import CardBox from '@components/Card/atoms/CardBox';
import CardMiddle from '@components/Card/atoms/CardMiddle';
import CardSize from '@components/Card/atoms/CardSize';
import CardText from '@components/Card/atoms/CardText';
import CardTop from '@components/Card/atoms/CardTop';
import EmptyCard from '@components/Card/atoms/EmptyCard';

export default function Card() {
  const {
    values: {
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
      cardHolderName,
      expirationMonth,
      expirationYear,
    },
  } = useFormContext<FormType>();

  const maskedCardNumber3 = maskText(cardNumber3);
  const maskedCardNumber4 = maskText(cardNumber4);

  return (
    <CardBox>
      <EmptyCard>
        <CardTop></CardTop>

        <CardMiddle>
          <CardSize size='small' chip></CardSize>
        </CardMiddle>

        <CardBottom>
          <CardBottom as='number'>
            <CardText fontSize='big'>{`${cardNumber1}  ${cardNumber2}  ${maskedCardNumber3}  ${maskedCardNumber4}`}</CardText>
          </CardBottom>
          <CardBottom as='info'>
            <CardText>{cardHolderName || 'NAME'}</CardText>
            <CardText>
              {expirationMonth || expirationYear
                ? `${expirationMonth} / ${expirationYear}`
                : 'MM / YY'}
            </CardText>
          </CardBottom>
        </CardBottom>
      </EmptyCard>
    </CardBox>
  );
}
