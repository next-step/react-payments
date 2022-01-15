import React from 'react';
import {
  CardBottom,
  CardBottomNumber,
  CardBottomInfo,
  CardBox,
  CardMiddle,
  CardTop,
  CardWrap,
  SmallCardChip,
  CardText,
  CardNickname,
} from 'components/Card/card.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';
import { CardListPageProps } from 'models/page.model';
import { replaceCardNumToDot } from 'utils';
import { useNavigate } from 'react-router-dom';

const CardListPage: React.VFC<CardListPageProps> = ({
  cardCompany,
  cardNum,
  userName,
  expiredDate,
  cardNickname,
}) => {
  const navigate = useNavigate();

  const goToCardAddPage = () => {
    navigate('/');
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
              <CardBox>
                <CardWrap>
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
                      } ${replaceCardNumToDot(
                        cardNum.third,
                      )} ${replaceCardNumToDot(cardNum.forth)}`}</CardText>
                    </CardBottomNumber>
                    <CardBottomInfo>
                      <CardText>{userName}</CardText>
                      <CardText>
                        {expiredDate.month} / {expiredDate.year}
                      </CardText>
                    </CardBottomInfo>
                  </CardBottom>
                </CardWrap>
              </CardBox>
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
