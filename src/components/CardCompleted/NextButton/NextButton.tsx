import { useNavigate } from 'react-router-dom';

import { Box, Button } from '@/components/Common';
import { ROUTES } from '@/constants/routes';
import {
  useCardExpirationContext,
  useCardNumberContext,
  useCardOwnerNameContext,
  useCardPasswordContext,
  useCardSecretCodeContext,
  useCardSelectModalContext,
  useCardListContext,
  useCardAliasContext,
} from '@/context';

export default function NextButton() {
  const navigate = useNavigate();

  const { cardNumber, resetCardNumber } = useCardNumberContext();
  const { cardExpiration, resetCardExpiration } = useCardExpirationContext();
  const { cardOwnerName, resetCardOwnerName } = useCardOwnerNameContext();
  const { cardSecretCode, resetCardSecretCode } = useCardSecretCodeContext();
  const { cardPassword, resetCardPassword } = useCardPasswordContext();
  const { selectedCard, resetSelectedModal } = useCardSelectModalContext();
  const { cardAlias, resetCardAlias } = useCardAliasContext();
  const { handleClickAdd } = useCardListContext();

  const handleClickNext = () => {
    handleClickAdd({
      cardNumber,
      cardExpiration,
      cardOwnerName,
      cardSecretCode,
      cardPassword,
      selectedCard,
      cardAlias: cardAlias || selectedCard.name,
    });

    resetCardNumber();
    resetCardExpiration();
    resetCardOwnerName();
    resetCardSecretCode();
    resetCardPassword();
    resetSelectedModal();
    resetCardAlias();

    navigate(ROUTES.CARD.LIST);
  };

  return (
    <Button className="button-text" onClick={handleClickNext}>
      다음
    </Button>
  );
}
