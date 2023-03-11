import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Common';
import { ROUTES } from '@/constants/routes';
import { useCardListContext, useCardAddForm } from '@/context';

export default function NextButton() {
  const navigate = useNavigate();

  const {
    cardForm: { cardNumber, cardExpiration, cardOwnerName, cardSecretCode, cardPassword, cardCompany, cardAlias },
    resetCardForm,
  } = useCardAddForm();

  const { handleClickAdd } = useCardListContext();

  const handleClickNext = () => {
    handleClickAdd({
      cardNumber,
      cardExpiration,
      cardOwnerName,
      cardSecretCode,
      cardPassword,
      cardCompany,
      cardAlias: cardAlias || cardCompany.name,
    });

    resetCardForm();

    navigate(ROUTES.CARD.LIST);
  };

  return (
    <Button className="button-text" onClick={handleClickNext}>
      다음
    </Button>
  );
}
