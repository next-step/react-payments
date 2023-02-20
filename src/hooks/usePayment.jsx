import { useState } from 'react';

const defaultCardInfo = {
  company: '',
  number: '',
  owner: '',
  expiry: '',
  nickname: '',
  cvc: '',
  password1: '',
  password2: '',
  backgroundColor: '#e5e5e5',
};

const digitTypeInput = ['cvc', 'password1', 'password2'];

const formatDigitTypeInput = ['number', 'expiry'];

const usePayment = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);
  const [cardList, setCardList] = useState([defaultCardInfo]);

  const onHandleCardInfoInput = (evt) => {
    const { value, id } = evt.target;
    checkValidInputValue(value, id);
    const formattedValue = formatInputValue(value, id);
    setCardInfo({ ...cardInfo, [id]: formattedValue });
  };

  const onHandleResetCardInfo = () => {
    setCardInfo(defaultCardInfo);
  };

  const checkValidInputValue = (value, id) => {
    if (digitTypeInput.indexOf(id) !== -1 && value.match(/[^0-9]/)) {
      alert('숫자만 입력가능합니다.');
    }
  };

  const formatInputValue = (value, id) => {
    let formattedValue = value;

    if (formatDigitTypeInput.indexOf(id) === -1) return value;
    if (id === 'number') {
      return formattedValue;
    }
    return formattedValue;
  };

  return { cardInfo, onHandleCardInfoInput, onHandleResetCardInfo };
};

export default usePayment;
