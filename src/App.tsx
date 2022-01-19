import React, { useCallback, useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MAX_LENGTH } from 'utils/validation';
import { CardAddPage, CardAddCompletedPage, CardListPage } from 'pages/index';
import {
  initialCardNumValue,
  initialCardPasswordValue,
  initialExpiredDateValue,
} from 'models/card.model';

interface PagesModel {
  path: string;
  element: React.ReactElement;
}

const App = () => {
  const location = useLocation();
  const [cardCompany, setCardCompany] = useState('');
  const [expiredDate, setExpiredDate] = useState(initialExpiredDateValue);
  const [cardNum, setCardNum] = useState(initialCardNumValue);
  const [userName, setUserName] = useState('');
  const [CVC, setCVC] = useState('');
  const [cardPassword, setCardPassword] = useState(initialCardPasswordValue);
  const [cardNickname, setCardNickname] = useState('');

  useEffect(() => {
    if (location.state === 'reset') {
      setCardCompany('');
      setExpiredDate(initialExpiredDateValue);
      setCardNum(initialCardNumValue);
      setUserName('');
      setCVC('');
      setCardPassword(initialCardPasswordValue);
      setCardNickname('');
    }
  }, [location]);

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

  const updateCardNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNickname(e.target.value);
  };

  const pages: PagesModel[] = [
    {
      path: '/',
      element: (
        <CardAddPage
          cardCompany={cardCompany}
          expiredDate={expiredDate}
          cardNum={cardNum}
          userName={userName}
          CVC={CVC}
          cardPassword={cardPassword}
          updateCardNumber={updateCardNumber}
          updateExpiredDate={updateExpiredDate}
          updateUserName={updateUserName}
          updateCVC={updateCVC}
          updateCardPassword={updateCardPassword}
        />
      ),
    },
    {
      path: '/completed',
      element: (
        <CardAddCompletedPage
          cardCompany={cardCompany}
          expiredDate={expiredDate}
          cardNum={cardNum}
          userName={userName}
          cardNickname={cardNickname}
          updateCardNickname={updateCardNickname}
        />
      ),
    },
    {
      path: '/list',
      element: (
        <CardListPage
          cardCompany={cardCompany}
          expiredDate={expiredDate}
          cardNum={cardNum}
          userName={userName}
          cardNickname={cardNickname}
        />
      ),
    },
  ];

  return (
    <Routes>
      {pages.map((page) => (
        <Route key={page.path} path={page.path} element={page.element} />
      ))}
    </Routes>
  );
};

export default App;
