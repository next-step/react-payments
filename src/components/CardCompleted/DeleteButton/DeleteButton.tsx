import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Common';
import { ROUTES } from '@/constants/routes';
import { useCardAddForm, useCardListContext } from '@/context';

export default function DeleteButton() {
  const navigate = useNavigate();
  const {
    cardForm: { cardNumber },
  } = useCardAddForm();
  const { handleClickDelete } = useCardListContext();

  const handleClick = () => {
    handleClickDelete(cardNumber);

    navigate(ROUTES.CARD.LIST);
  };

  return (
    <Button className="button-text ml-5" onClick={handleClick}>
      삭제
    </Button>
  );
}
