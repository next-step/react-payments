import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewCardContext } from 'src/contexts/NewCardContext';
import { JsonToArr } from 'src/utils/functions';
import { ICardInfo } from 'src/utils/types';

const useCardAlias = () => {
  const navigate = useNavigate();
  const aliasInputRef = useRef<HTMLInputElement>(null);
  const { cardInfo, handleCardInfo } = useContext(NewCardContext);
  const cards = JsonToArr<ICardInfo[]>(localStorage.getItem('cards')) || [];

  useEffect(() => {
    if (!cardInfo.bankTitle) {
      // * store에 값이 없을 때 다시 card-new 페이지로 보냄.
      navigate('/card-new', { replace: true });
    }
  }, [cardInfo, navigate]);

  const onClickConfirmBtn = () => {
    let cardAlias = '';
    if (aliasInputRef.current) {
      const { value } = aliasInputRef.current;
      if (!value) {
        cardAlias = cardInfo.bankTitle;
        handleCardInfo({ ...cardInfo, alias: cardAlias });
      } else {
        cardAlias = value;
        handleCardInfo({ ...cardInfo, alias: cardAlias });
      }
    }

    const cardItem: ICardInfo = {
      id: `${cardAlias}${new Date().getTime()}`,
      bgColor: cardInfo.bgColor,
      title: cardInfo.bankTitle,
      creditNumber: cardInfo.creditNumber,
      customerName: cardInfo.customerName,
      expirationDate: cardInfo.expirationDate,
      alias: cardAlias,
    };

    localStorage.setItem('cards', JSON.stringify([...cards, cardItem]));
    navigate('/', { replace: true });
  };

  return {
    aliasInputRef,
    cards,
    cardInfo,
    onClickConfirmBtn,
  };
};

export default useCardAlias;
