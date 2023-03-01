// import Button from '../../common/Button/Button';
import CardNumbersInput from '../CardInput/CardNumbers/CardNumbersInput';
import CardExpirationDateInput from '../CardInput/CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from '../CardInput/CardOwner/CardOwnerInput';
import CardCVCInput from '../CardInput/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../CardInput/CardPassword/CardPasswordInput';
import Button from '../../common/Button/Button';
import { useCard } from '../../../store/CardContext';
import { MAX_INPUT_LENGTH } from '../../../constants/numbers';
import { Form, useNavigate } from 'react-router-dom';
import { CHANGE_CARD } from '../../../constants/action';

const CardForm = () => {
  const { cardInfo, changeCardInfo } = useCard();
  const navigate = useNavigate();

  const isAllFilledOut = (cardInfo) => {
    const {
      cardNumbers,
      cardExpirationDate,
      cardPassword,
      cardCVC,
      cardCompanyId,
    } = cardInfo;

    return (
      cardCompanyId &&
      cardCVC.length === MAX_INPUT_LENGTH.CVC &&
      cardNumbers.every(
        (part) => part.length === MAX_INPUT_LENGTH.CARD_NUMBER
      ) &&
      cardExpirationDate.every(
        (part) => part.length === MAX_INPUT_LENGTH.DATE
      ) &&
      cardPassword.every((part) => part.length === MAX_INPUT_LENGTH.PW)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //TODO: fix validation error
    // if (isAllFilledOut(cardInfo))
    navigate('/registration/setCardNickname');
    changeCardInfo(CHANGE_CARD.ERROR, '빈칸을 모두 입력해 주세요.');
  };

  return (
    // <Form onSubmit={handleSubmit} formErrorMessage={cardInfo.error}>
    //   <CardNumbersInput />
    //   <CardExpirationDateInput />
    //   <CardOwnerInput />
    //   <CardCVCInput />
    //   <CardPasswordInput />
    //   <Button title='다음' type='submit' />
    // </Form>
    <div id='card-form' className='w-90'>
      <form onSubmit={handleSubmit}>
        <CardNumbersInput />
        <CardExpirationDateInput />
        <CardOwnerInput />
        <CardCVCInput />
        <CardPasswordInput />
        <Button title='다음' type='submit' />
      </form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {cardInfo.error}
      </div>
    </div>
  );
};

export default CardForm;
