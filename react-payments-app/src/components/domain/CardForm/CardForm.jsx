// import Button from '../../common/Button/Button';
import CardNumbersInput from '../CardInput/CardNumbers/CardNumbersInput';
import CardExpirationDateInput from '../CardInput/CardExpirationDate/CardExpirationDateInput';
import CardOwnerInput from '../CardInput/CardOwner/CardOwnerInput';
import CardCVCInput from '../CardInput/CardCVCInput/CardCVCInput';
import CardPasswordInput from '../CardInput/CardPassword/CardPasswordInput';
import Button from '../../common/Button/Button';
import { useCard } from '../../../store/CardContext';

const CardForm = () => {
  const { cardInfo } = useCard();

  // const isAllFilledOut = (cardInfo) => {
  //   const { cardNumbers, cardExpirationDate, cardPassword, cardCVC } = cardInfo;

  //   return (
  //     cardCVC.length === MAX_INPUT_LENGTH.CVC &&
  //     cardNumbers.every(
  //       (part) => part.length === MAX_INPUT_LENGTH.CARD_NUMBER
  //     ) &&
  //     cardExpirationDate.every(
  //       (part) => part.length === MAX_INPUT_LENGTH.DATE
  //     ) &&
  //     cardPassword.every((part) => part.length === MAX_INPUT_LENGTH.PW)
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: validation
  };

  return (
    <div id='card-form' className='w-90'>
      <form>
        <CardNumbersInput />
        <CardExpirationDateInput />
        <CardOwnerInput />
        <CardCVCInput />
        <CardPasswordInput />
        <Button title='다음' type='submit' onClick={handleSubmit} />
      </form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {cardInfo.error}
      </div>
    </div>
  );
};

export default CardForm;
