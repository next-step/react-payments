import { Card } from '@/components/Common';
import {
  useCardAliasContext,
  useCardExpirationContext,
  useCardNumberContext,
  useCardOwnerNameContext,
  useCardSelectModalContext,
} from '@/context';

export default function CardBox() {
  const { selectedCard } = useCardSelectModalContext();
  const { cardOwnerName } = useCardOwnerNameContext();
  const { cardNumber } = useCardNumberContext();
  const { cardExpiration } = useCardExpirationContext();
  const { cardAlias } = useCardAliasContext();

  return (
    <Card
      type="big"
      cardNumber={cardNumber}
      cardExpiration={cardExpiration}
      cardOwnerName={cardOwnerName}
      selectedCard={selectedCard}
      cardAlias={cardAlias}
    />
  );
}
