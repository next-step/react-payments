import { Link, useNavigate } from 'react-router-dom';
import { getLocalStorage, objToMap, setLocalStorage } from '@/utils';
import { CARD_LIST_KEY } from '@/constants/key';
import { Card, Header } from '@/components';
import * as styles from './index.css';
import type { FormItems } from '@/types/form';
import { useState } from 'react';

const List = () => {
  const navigate = useNavigate();
  const [datas, setDatas] = useState<FormItems[]>(
    getLocalStorage(CARD_LIST_KEY) || []
  );

  const handleClickCard = (data: FormItems) => {
    navigate('/new', { state: { data: objToMap(data) } });
  };
  const handleClickDelete = (cardNum: string) => {
    const deleted = datas.filter(
      (item) =>
        `${item.cardNumber1}${item.cardNumber2}${item.cardNumber3}${item.cardNumber4}` !==
        cardNum
    );
    setLocalStorage(CARD_LIST_KEY, deleted);
    setDatas(deleted);
  };
  return (
    <>
      <Header>
        <h1 className={styles.header}>보유 카드</h1>
      </Header>
      <main className={styles.flexGrow}>
        <ul className={styles.listContainer}>
          <Link
            to='/new'
            className={styles.link}
            aria-label='카드 추가 페이지로 이동'
          >
            +
          </Link>
          {datas.map((data) => {
            const {
              id,
              cardNumber1,
              cardNumber2,
              cardNumber3,
              cardNumber4,
              cardOwner,
              expireDateMonth,
              expireDateYear,
              cardName,
            } = data;
            const cardNum = `${cardNumber1}${cardNumber2}${cardNumber3}${cardNumber4}`;
            return (
              <li key={id} className={styles.listItem}>
                <div>{cardName}</div>
                <Card
                  onClick={() => handleClickCard(data)}
                  size='small'
                  cardNumber={[
                    cardNumber1,
                    cardNumber2,
                    cardNumber3,
                    cardNumber4,
                  ]}
                  owner={cardOwner || ''}
                  expirationDate={{
                    month: expireDateMonth,
                    year: expireDateYear,
                  }}
                />
                <button onClick={() => handleClickDelete(cardNum)}>삭제</button>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
};

export default List;
