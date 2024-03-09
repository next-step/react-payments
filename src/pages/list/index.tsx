import { Link } from 'react-router-dom';
import { getLocalStorage } from '@/utils';
import { CARD_LIST_KEY } from '@/constants/key';
import { Card, Header } from '@/components';
import * as styles from './index.css';
import type { FormItems } from '@/types/form';

const List = () => {
  const datas: FormItems[] = getLocalStorage(CARD_LIST_KEY) || [];
  return (
    <>
      <Header>
        <h1 className={styles.header}>보유 카드</h1>
      </Header>
      <main className={styles.flexGrow}>
        <ul className={styles.listContainer}>
          {datas.map(
            ({
              cardNumber1,
              cardNumber2,
              cardNumber3,
              cardNumber4,
              cardOwner,
              expireDateMonth,
              expireDateYear,
              cardName,
            }) => {
              const cardNum = `${cardNumber1}${cardNumber2}${cardNumber3}${cardNumber4}`;
              return (
                <li key={cardNum} className={styles.listItem}>
                  <div>{cardName}</div>
                  <Card
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
                </li>
              );
            }
          )}
          <Link
            to='/new'
            className={styles.link}
            aria-label='카드 추가 페이지로 이동'
          >
            +
          </Link>
        </ul>
      </main>
    </>
  );
};

export default List;
