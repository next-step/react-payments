import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MAX_LENGTH } from 'utils/validation';
import { CardAddPage, CardAddCompletedPage, CardListPage } from 'pages/index';
import {
  CardProps,
  initialCardNumValue,
  initialCardPasswordValue,
  initialExpiredDateValue,
} from 'models/card.model';
import { CardListContext, CurrentCardContext } from 'utils/cardsUtils';

interface PagesModel {
  path: string;
  element: React.ReactElement;
}

const App = () => {
  const location = useLocation();

  const [cardList, setCardList] = useState<CardProps[]>([]);

  const [cardCompany, setCardCompany] = useState('');
  const [expiredDate, setExpiredDate] = useState(initialExpiredDateValue);
  const [cardNum, setCardNum] = useState(initialCardNumValue);
  const [userName, setUserName] = useState('');
  const [CVC, setCVC] = useState('');
  const [cardPassword, setCardPassword] = useState(initialCardPasswordValue);
  const [cardNickname, setCardNickname] = useState('');
  const [createdAt, setCreatedAt] = useState<Date>();

  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (location.state === 'reset') {
      resetCard();
    }
  }, [location.state]);

  const resetCard = () => {
    setCardCompany('');
    setExpiredDate(initialExpiredDateValue);
    setCardNum(initialCardNumValue);
    setUserName('');
    setCVC('');
    setCardPassword(initialCardPasswordValue);
    setCardNickname('');
  };

  // TODO: 시간 될 때 카드사 자동 추정 기능 추가 예정
  const updateCardCompany = (name: string) => {
    setCardCompany(name);
  };

  const updateCardNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (value.length > MAX_LENGTH.CARD_NUMBER) {
        setCardNum({
          ...cardNum,
          [name]: value.substring(0, MAX_LENGTH.CARD_NUMBER),
        });
        return;
      }
      setCardNum({
        ...cardNum,
        [e.target.name]: e.target.value,
      });
    },
    [cardNum],
  );

  const updateExpiredDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (value.length > MAX_LENGTH.EXPIRED_DATE) {
        setExpiredDate({
          ...expiredDate,
          [name]: value.substring(0, MAX_LENGTH.EXPIRED_DATE),
        });
        return;
      }
      setExpiredDate({
        ...expiredDate,
        [name]: value,
      });
    },
    [expiredDate],
  );

  const updateUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length > MAX_LENGTH.USER_NAME) {
        setUserName(value.substring(0, MAX_LENGTH.USER_NAME));
        return;
      }
      setUserName(value);
    },
    [],
  );

  const updateCVC = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > MAX_LENGTH.CVC) {
      setCVC(value.substring(0, MAX_LENGTH.CVC));
      return;
    }
    setCVC(value);
  }, []);

  const updateCardPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (value.length > MAX_LENGTH.CARD_PASSWORD) {
        setCardPassword({
          ...cardPassword,
          [name]: value.substring(0, MAX_LENGTH.CARD_PASSWORD),
        });
        return;
      }
      setCardPassword({
        ...cardPassword,
        [name]: value,
      });
    },
    [cardPassword],
  );

  const updateCardNickname = (nickname: string) => {
    if (nickname.length === 0) {
      return '국민카드';
    }
    if (nickname.length > MAX_LENGTH.CARD_NICKNAME) {
      return nickname.substring(0, MAX_LENGTH.CARD_NICKNAME);
    }
    return nickname;
  };

  const addCard = () => {
    setCardList([
      ...cardList,
      {
        cardNum,
        userName,
        CVC,
        cardPassword,
        expiredDate,
        cardNickname: updateCardNickname(nicknameRef.current?.value || ''),
        cardCompany: cardCompany || '국민카드',
        createdAt: new Date(),
      },
    ]);
  };

  const setCard = (currentCard: CardProps) => {
    setCVC(currentCard.CVC);
    setCardCompany(currentCard.cardCompany || '');
    setCardNickname(currentCard.cardNickname);
    setUserName(currentCard.userName);
    setExpiredDate(currentCard.expiredDate);
    setCardPassword(currentCard.cardPassword);
    setCardNum(currentCard.cardNum);
    setCardPassword(currentCard.cardPassword);
    setCreatedAt(currentCard.createdAt);
  };

  const deleteCard = (currentCard: CardProps) => {
    const remainCards = cardList.filter(
      (card) => card.createdAt?.getTime() !== currentCard.createdAt?.getTime(),
    );
    setCardList(remainCards);
  };

  const pages: PagesModel[] = [
    {
      path: '/',
      element: <CardAddPage />,
    },
    {
      path: '/completed',
      element: <CardAddCompletedPage nicknameRef={nicknameRef} />,
    },
    {
      path: '/list',
      element: <CardListPage />,
    },
  ];

  return (
    <CardListContext.Provider value={cardList}>
      <CurrentCardContext.Provider
        value={{
          card: {
            cardNum,
            userName,
            CVC,
            cardPassword,
            expiredDate,
            cardNickname,
            cardCompany,
            createdAt,
          },
          reset: resetCard,
          setCard,
          updateCVC,
          updateCardCompany,
          updateCardNumber,
          updateCardPassword,
          updateExpiredDate,
          updateUserName,
          addCard,
          deleteCard,
        }}
      >
        <Routes>
          {pages.map((page) => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>
      </CurrentCardContext.Provider>
    </CardListContext.Provider>
  );
};

export default App;
