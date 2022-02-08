import React, { Fragment, useContext } from 'react';
import { FlexCenter, PageTitle } from '../common/styles';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { CardContext } from '../context/CardContext';
import { useNavigate } from 'react-router-dom';
import { Card as ICard } from '../type';

const List = () => {
  const history = useNavigate();
  const { cardList, setCardInitialData, setCardEditingAlias, removeCard } =
    useContext(CardContext);

  const onClickAddCard = () => {
    setCardInitialData();
    history('/add');
  };

  const onClickCard = (card: ICard) => {
    setCardEditingAlias(card);
    history('/alias', {
      state: {
        type: 'edit',
      },
    });
  };

  const onClickRemoveCard = (card: ICard) => {
    removeCard(card);
  };

  return (
    <Layout flexColumnCenter>
      <FlexCenter>
        <PageTitle mb10>보유 카드</PageTitle>
      </FlexCenter>
      {cardList
        .map((card) => (
          <Fragment key={card.cardNumber.join('')}>
            <Card
              type="list"
              size="small"
              cardNumber={card.cardNumber}
              expirationNumber={card.expirationNumber}
              owner={card.ownerName}
              company={card.company}
              alias={card.alias}
              onClick={() => onClickCard(card)}
              removeButton
              onClickRemoveCard={() => onClickRemoveCard(card)}
            />
            <div>
              <span>{card.alias || card.company?.name}</span>
            </div>
          </Fragment>
        ))
        .reverse()}
      <Card type="empty" size="small" onClick={onClickAddCard} />
    </Layout>
  );
};

export default List;
