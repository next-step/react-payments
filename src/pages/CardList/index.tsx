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

const CardListContainers: React.VFC = () => {
  return (
    <>
      {/* PAGE 05 */}
      <h2>5️⃣ 카드 목록</h2>
      <Root>
        <App flexColumnCenter>
          <FlexCenter>
            <PageTitle mb={10}>보유 카드</PageTitle>
          </FlexCenter>
          <CardBox>
            <SmallCard>
              <CardTop>
                <CardText>클린카드</CardText>
              </CardTop>
              <CardMiddle>
                <SmallCardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber>
                  <CardText>1111 - 2222 - oooo - oooo</CardText>
                </CardBottomNumber>
                <CardBottomInfo>
                  <CardText>YUJO</CardText>
                  <CardText>12 / 23</CardText>
                </CardBottomInfo>
              </CardBottom>
            </SmallCard>
          </CardBox>
          <CardNickname>법인카드</CardNickname>
          <CardBox>
            <SmallCard isEmpty={true}>+</SmallCard>
          </CardBox>
        </App>
      </Root>
    </>
  );
};

export default CardListContainers;
