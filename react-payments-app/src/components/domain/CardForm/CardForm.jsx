// import Button from '../../common/Button/Button';
import CardNumbersInput from '../CardInput/CardNumbers/CardNumbersInput';
import CardExpirationDateInput from '../CardInput/CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from '../CardInput/CardOwner/CardOwnerInput';
import CardCVCInput from '../CardInput/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../CardInput/CardPassword/CardPasswordInput';
import Button from '../../common/Button/Button';
import { useCard } from '../../../store/CardContext';
import { MAX_INPUT_LENGTH } from '../../../constants/numbers';
import { useNavigate } from 'react-router-dom';
import { CHANGE_CARD } from '../../../constants/action';

import Form from '../../common/Input/Form';

const CardForm = () => {
  const { cardInfo, changeCardInfo } = useCard();
  const navigate = useNavigate();

  const isAllFilledOut = (cardInfo) => {
    const { cardNumbers, cardExpirationDate, cardPassword, cardCVC } = cardInfo;

    return (
      // cardCompanyId &&
      cardCVC.length === MAX_INPUT_LENGTH.CVC &&
      cardNumbers.length === MAX_INPUT_LENGTH.CARD_NUMBERS &&
      cardExpirationDate.every(
        (part) => part.length === MAX_INPUT_LENGTH.DATE
      ) &&
      cardPassword.every((part) => part.length === MAX_INPUT_LENGTH.PW)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAllFilledOut(cardInfo)) {
      changeCardInfo(CHANGE_CARD.ERROR, '빈칸을 모두 입력해 주세요.');
      return;
    }
    changeCardInfo(CHANGE_CARD.ERROR, null);

    navigate('/completed');
  };

  return (
    <>
      <Form
        id={'card-registration-form'}
        onSubmit={handleSubmit}
        error={cardInfo.error}
      >
        <CardNumbersInput />
        <CardExpirationDateInput />
        <CardOwnerInput />
        <CardCVCInput />
        <CardPasswordInput />
      </Form>
      <Button title='다음' type='submit' form={'card-registration-form'} />
    </>
  );
};

export default CardForm;
