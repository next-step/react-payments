import React, { useContext } from 'react';
import { CardBox, CardWrap, CardNickname } from 'components/Card/card.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';
import { useNavigate } from 'react-router-dom';
import { Card } from 'components';
import { CardListContext, CurrentCardContext } from 'utils/cardsUtils';
import styled from 'styled-components';
import { CardProps } from 'models/card.model';

const CardContainer = styled.div`
  margin-bottom: 26px;
  text-align: center;
`;

const CardListPage: React.VFC = () => {
  const navigate = useNavigate();

  const cardList = useContext(CardListContext);
  const { setCard } = useContext(CurrentCardContext);

  const goEditCardNickname = (currentCard: CardProps) => {
    setCard(currentCard);
    navigate('/completed', { state: 'edit' });
  };

  const goToCardAddPage = () => {
    navigate('/', { state: 'reset' });
  };

  return (
    <>
      <Root>
        <App flexColumnCenter>
          <FlexCenter>
            <PageTitle mb={10}>보유 카드</PageTitle>
          </FlexCenter>
          <CardBox style={{ marginBottom: '30px' }}>
            <CardWrap isEmpty={true} onClick={goToCardAddPage}>
              +
            </CardWrap>
          </CardBox>
          {cardList.map((card, index) => {
            return (
              card.cardNickname && (
                <CardContainer
                  key={`${card.cardNickname}_${card.cardCompany}_${index}`}
                  onClick={() => goEditCardNickname(card)}
                >
                  <Card
                    size="small"
                    cardCompany={card.cardCompany}
                    expiredMonth={card.expiredDate.month}
                    expiredYear={card.expiredDate.year}
                    cardNum={card.cardNum}
                    userName={card.userName}
                    isListPage
                  />
                  <CardNickname>{card.cardNickname}</CardNickname>
                </CardContainer>
              )
            );
          })}
        </App>
      </Root>
    </>
  );
};

export default CardListPage;
