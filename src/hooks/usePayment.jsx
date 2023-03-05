import useRoute from './useRoute';
import { PATH, DEFAULT_CARD_INFO } from '../Constant';
import { usePaymentContext, usePaymentAction } from '../Context';
import {
  cleanNaNValue,
  formatInputValue,
  isDigitInputValue,
  isInvalidInputValue
} from '../utils/inputValue';

const usePayment = () => {
  const { cardInfo, cardList } = usePaymentContext();
  const { setCardInfo, setCardList } = usePaymentAction();
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
    setCardInfo(DEFAULT_CARD_INFO);
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

  const deleteCardList = (evt) => {
    const deleteCardElement = evt.target.closest('.card-box');
    const { number } = deleteCardElement.dataset;
    if (number === null || number === undefined) throw new Error('Not allowed Delete');
    setCardList((cardList) => cardList.filter((prevCardInfo) => prevCardInfo.number !== number));
  };

  const handleSave = () => {
    // if (!cardInfo['nickname'])
    //   setCardInfo((cardInfo) => ({ ...cardInfo, nickname: cardInfo['company'] }));
    //TODO: 닉네임 자동저장, 빈 cardInfo save 막기
    const updateCardInfoIdx = cardList.findIndex(
      (existCardInfo) => existCardInfo.number === cardInfo.number
    );
    if (updateCardInfoIdx !== -1) updateCardList(updateCardInfoIdx);
    else insertCardList();
    movePage(PATH.HOME);
  };

  return {
    handleInputChange,
    handleSave,
    handleSubmit,
    resetCardInfo,
    deleteCardList
  };
};

export default usePayment;
