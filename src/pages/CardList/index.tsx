import React from 'react';
import {
  CardBottom,
  CardBottomNumber,
  CardBottomInfo,
  CardBox,
  CardMiddle,
  CardTop,
  SmallCard,
  SmallCardChip,
  CardText,
  CardNickname,
} from 'components/Card/card.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';
import { CardAddCompletedPageProps } from 'models/page.model';
import { replaceCardNumToDot } from 'utils';

const CardListPage: React.VFC<CardAddCompletedPageProps> = ({
  cardCompany,
  cardNum,
  userName,
  expiredDate,
  cardNickname,
  updateCardNickname,
}) => {
  return (
    <>
      <Root>
        <App flexColumnCenter>
          <FlexCenter>
            <PageTitle mb={10}>보유 카드</PageTitle>
          </FlexCenter>
          <CardBox>
            <SmallCard>
              <CardTop>
                <CardText>{cardCompany}</CardText>
              </CardTop>
              <CardMiddle>
                <SmallCardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber>
                  <CardText>{`${cardNum.first} ${
                    cardNum.second
                  } ${replaceCardNumToDot(cardNum.third)} ${replaceCardNumToDot(
                    cardNum.forth,
                  )}`}</CardText>
                </CardBottomNumber>
                <CardBottomInfo>
                  <CardText>{userName}</CardText>
                  <CardText>
                    {' '}
                    {expiredDate.month} / {expiredDate.year}
                  </CardText>
                </CardBottomInfo>
              </CardBottom>
            </SmallCard>
          </CardBox>
          <CardNickname>{cardNickname}</CardNickname>
          <CardBox>
            <SmallCard isEmpty={true}>+</SmallCard>
          </CardBox>
        </App>
      </Root>
    </>
  );
};

export default CardListPage;
