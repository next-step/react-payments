import React from 'react';
import { ButtonBox, ButtonText } from 'components/Button/button.style';
import {
  BigCard,
  BigCardChip,
  CardBottom,
  CardBottomInfo,
  CardBottomNumber,
  CardBox,
  CardMiddle,
  CardTextBig,
  CardTop,
} from 'components/Card/card.style';
import { InputContainer, InputUnderline } from 'components/Input/input.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';

const CardAddCompletedContainer: React.VFC = () => {
  return (
    <>
      {/* PAGE 04 */}
      <h2>4️⃣ 카드 추가 완료</h2>
      <Root>
        <App flexColumnCenter>
          <FlexCenter>
            <PageTitle mb={10}>카드등록이 완료되었습니다.</PageTitle>
          </FlexCenter>
          <CardBox>
            <BigCard>
              <CardTop>
                <CardTextBig>클린카드</CardTextBig>
              </CardTop>
              <CardMiddle>
                <BigCardChip />
              </CardMiddle>
              <CardBottom>
                <CardBottomNumber>
                  <CardTextBig>1111 - 2222 - oooo - oooo</CardTextBig>
                </CardBottomNumber>
                <CardBottomInfo>
                  <CardTextBig>YUJO</CardTextBig>
                  <CardTextBig>12 / 23</CardTextBig>
                </CardBottomInfo>
              </CardBottom>
            </BigCard>
          </CardBox>
          <InputContainer width={100} flexCenter>
            <InputUnderline
              width={75}
              type="text"
              placeholder="카드의 별칭을 입력해주세요."
            />
          </InputContainer>
          <ButtonBox mt={50}>
            <ButtonText>다음</ButtonText>
          </ButtonBox>
        </App>
      </Root>
    </>
  );
};

export default CardAddCompletedContainer;
