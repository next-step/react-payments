import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MAX_LENGTH } from 'utils/validation';
import { CardAddPage, CardAddCompletedPage, CardListPage } from 'pages/index';
import { CardProps, initialCardValue } from 'models/card.model';
import { CardListContext, CurrentCardContext } from 'utils/cardsUtils';

interface PagesModel {
  path: string;
  element: React.ReactElement;
}

const App = () => {
  const location = useLocation();

  const [cardList, setCardList] = useState<CardProps[]>([]);

  const [currentCard, setCurrentCard] = useState(initialCardValue);
  const nicknameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (location.state === 'reset') {
      setCurrentCard(initialCardValue);
    }
  }, [location.state]);

  // TODO: 시간 될 때 카드사 자동 추정 기능 추가 예정
  const updateCardCompany = (name: string) => {
    setCurrentCard({
      ...currentCard,
      cardCompany: name,
    });
  };

  const updateCardNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (value.length > MAX_LENGTH.CARD_NUMBER) {
        setCurrentCard({
          ...currentCard,
          cardNum: {
            ...currentCard.cardNum,
            [name]: value.substring(0, MAX_LENGTH.CARD_NUMBER),
          },
        });
        return;
      }
      setCurrentCard({
        ...currentCard,
        cardNum: {
          ...currentCard.cardNum,
          [name]: value,
        },
      });
    },
    [currentCard],
  );

  const updateExpiredDate = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (value.length > MAX_LENGTH.EXPIRED_DATE) {
        setCurrentCard({
          ...currentCard,
          expiredDate: {
            ...currentCard.expiredDate,
            [name]: value.substring(0, MAX_LENGTH.CARD_NUMBER),
          },
        });
        return;
      }
      setCurrentCard({
        ...currentCard,
        expiredDate: {
          ...currentCard.expiredDate,
          [name]: value,
        },
      });
    },
    [currentCard],
  );

  const updateUserName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length > MAX_LENGTH.USER_NAME) {
        setCurrentCard({
          ...currentCard,
          userName: value.substring(0, MAX_LENGTH.USER_NAME),
        });
        return;
      }
      setCurrentCard({
        ...currentCard,
        userName: value,
      });
    },
    [currentCard],
  );

  const updateCVC = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (value.length > MAX_LENGTH.CVC) {
        setCurrentCard({
          ...currentCard,
          CVC: value.substring(0, MAX_LENGTH.CVC),
        });
        return;
      }
      setCurrentCard({
        ...currentCard,
        CVC: value,
      });
    },
    [currentCard],
  );

  const updateCardPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target;
      if (value.length > MAX_LENGTH.CARD_PASSWORD) {
        setCurrentCard({
          ...currentCard,
          cardPassword: {
            ...currentCard.cardPassword,
            [name]: value.substring(0, MAX_LENGTH.CARD_PASSWORD),
          },
        });
        return;
      }
      setCurrentCard({
        ...currentCard,
        cardPassword: {
          ...currentCard.cardPassword,
          [name]: value,
        },
      });
    },
    [currentCard],
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
      {
        ...currentCard,
        cardNickname: updateCardNickname(nicknameRef.current?.value || ''),
        cardCompany: currentCard.cardCompany || '국민카드',
        createdAt: new Date(),
      },
      ...cardList,
    ]);
  };

  const setCard = ({
    cardNum,
    CVC,
    cardNickname,
    cardPassword,
    cardCompany,
    createdAt,
    userName,
    expiredDate,
  }: CardProps) => {
    setCurrentCard({
      cardNickname,
      cardNum,
      CVC,
      cardCompany: cardCompany || '',
      cardPassword,
      createdAt,
      userName,
      expiredDate,
    });
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
            ...currentCard,
          },
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
