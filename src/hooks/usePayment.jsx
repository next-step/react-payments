import { useState } from 'react';
import useRoute from './useRoute';
import { PATH } from '../Constant';
import { checkValidInputValue, cleanNaNValue, formatInputValue } from '../utils/inputValue';

const defaultCardInfo = {
  company: '',
  number: '',
  owner: '',
  expiry: '',
  nickname: '',
  cvc: '',
  password1: '',
  password2: '',
  backgroundColor: '#e5e5e5'
};

const cardCompanyList = [
  {
    company: '포코카드',
    backgroundColor: 'red'
  },
  {
    company: '준카드',
    backgroundColor: 'palegreen'
  },
  {
    company: '혜원카드',
    backgroundColor: 'skyblue'
  },
  {
    company: '윤호카드',
    backgroundColor: 'yellow'
  }
  // {
  //   company: "다빈카드",
  //   backgroundColor: "pink",
  // },
  // {
  //   company: "나나카드",
  //   backgroundColor: "yellowgreen",
  // },
  // {
  //   company: "치치카드",
  //   backgroundColor: "plum",
  // },
  // {
  //   company: "사나카드",
  //   backgroundColor: "lightseagreen",
  // },
  // {
  //   company: "랄랄카드",
  //   backgroundColor: "burlywood",
  // },
];
const usePayment = () => {
  const [cardInfo, setCardInfo] = useState(defaultCardInfo);
  const [cardList, setCardList] = useState([]);
  const { movePage } = useRoute();

  const handleCardInfoInput = (evt) => {
    let { value, id } = evt.target;
    if (!checkValidInputValue(value, id)) {
      alert('숫자만 입력가능합니다.');
      value = cleanNaNValue(value);
    }
    setCardInfo({ ...cardInfo, [id]: formatInputValue(value, id) });
  };

  const handleResetCardInfo = () => {
    setCardInfo(defaultCardInfo);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleSave = () => {
    setCardList([...cardList, cardInfo]);
    movePage(PATH.HOME);
  };

  return {
    cardInfo,
    handleCardInfoInput,
    handleSave,
    cardList,
    cardCompanyList,
    handleSubmit,
    setCardInfo,
    handleResetCardInfo
  };
};

export default usePayment;
