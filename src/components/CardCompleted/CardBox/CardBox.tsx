import { Card } from '@/components/Common';
import { useCardAddForm } from '@/context/CardAddForm';

export default function CardBox() {
  const { cardForm } = useCardAddForm();
  const { cardNumber, cardExpiration, cardOwnerName, cardCompany, cardAlias } = cardForm;

  return (
    <Card
      type="big"
      cardNumber={cardNumber}
      cardExpiration={cardExpiration}
      cardOwnerName={cardOwnerName}
      cardCompany={cardCompany}
      cardAlias={cardAlias}
    />
  );
}
