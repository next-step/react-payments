import React from 'react';
import { CardBox, CardWrap, CardNickname } from 'components/Card/card.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';
import { CardListPageProps } from 'models/page.model';
import { useNavigate } from 'react-router-dom';
import { Card } from 'components';

const CardListPage: React.VFC<CardListPageProps> = ({
  cardCompany,
  cardNum,
  userName,
  expiredDate,
  cardNickname,
}) => {
  const navigate = useNavigate();

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
          {cardNickname && (
            <>
              <Card
                size="small"
                cardCompany={cardCompany}
                expiredMonth={expiredDate.month}
                expiredYear={expiredDate.year}
                cardNum={cardNum}
                userName={userName}
                isListPage
              />
              <CardNickname>{cardNickname}</CardNickname>
            </>
          )}
          <CardBox>
            <CardWrap isEmpty={true} onClick={goToCardAddPage}>
              +
            </CardWrap>
          </CardBox>
        </App>
      </Root>
    </>
  );
};

export default CardListPage;
