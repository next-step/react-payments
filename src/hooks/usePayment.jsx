import { useState } from 'react';
import useRoute from './useRoute';
import { PATH } from '../Constant';
import {
  cleanNaNValue,
  formatInputValue,
  isDigitInputValue,
  isInvalidInputValue
} from '../utils/inputValue';

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
  const [cardInfo, setCardInfo] = useState(defaultCardInfo); //작성 중인 카드 정보 인스턴스라고 생각하기
  const [cardList, setCardList] = useState([]);
  const { movePage } = useRoute();

  const handleInputChange = (evt) => {
    let { value, id } = evt.target;
    if (!isDigitInputValue(value, id)) {
      alert('숫자만 입력 가능합니다\n입력값을 확인해주세요!');
      value = cleanNaNValue(value);
    }
    setCardInfo((cardInfo) => ({ ...cardInfo, [id]: formatInputValue(value, id) }));
  };

  const resetCardInfo = () => {
    setCardInfo(defaultCardInfo);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isInvalidInputValue(cardInfo))
      alert('유효하지 않은 입력값이 있습니다\n입력값을 확인해주세요!');
    else movePage(PATH.SAVE);
  };

  const updateCardList = (updateIdx) => {
    if (!cardList.includes(cardInfo)) {
      if (updateIdx === null || updateIdx === undefined) throw new Error('Not allowed idx');
      setCardList(
        cardList.map((prevCardInfo, idx) => {
          if (idx === updateIdx) return { ...cardInfo };
          return prevCardInfo;
        })
      );
    }
    resetCardInfo();
  };

  const insertCardList = () => {
    if (cardList.includes(cardInfo)) {
      alert('중복된 카드 등록은 허용되지 않습니다.');
      throw new Error('Duplicated CardInfo');
    }
    setCardList((cardList) => [cardInfo, ...cardList]);
    resetCardInfo();
  };

  const handleSave = () => {
    // if (!cardInfo['nickname'])
    //   setCardInfo((cardInfo) => ({ ...cardInfo, nickname: cardInfo['company'] }));
    const updateCardInfoIdx = cardList.findIndex(
      (existCardInfo) => existCardInfo.number === cardInfo.number
    );
    if (updateCardInfoIdx !== -1) updateCardList(updateCardInfoIdx);
    else insertCardList();
    movePage(PATH.HOME);
  };

  return {
    cardInfo,
    handleInputChange,
    handleSave,
    cardList,
    cardCompanyList,
    handleSubmit,
    setCardInfo,
    resetCardInfo
  };
};

export default usePayment;
