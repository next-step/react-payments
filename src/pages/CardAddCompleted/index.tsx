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
import { CardAddCompletedPageProps } from 'models/page.model';
import { replaceCardNumToDot } from 'utils';
import { useNavigate } from 'react-router-dom';

const CardAddCompletedPage: React.VFC<CardAddCompletedPageProps> = ({
  cardCompany,
  cardNum,
  userName,
  expiredDate,
  cardNickname,
  updateCardNickname,
}) => {
  const navigate = useNavigate();
  const goToCardListPage = () => {
    if (cardNickname) {
      navigate('/list');
    }
  };
  return (
    <Root>
      <App flexColumnCenter>
        <FlexCenter>
          <PageTitle mb={10}>카드등록이 완료되었습니다.</PageTitle>
        </FlexCenter>
        <CardBox>
          <BigCard>
            <CardTop>
              <CardTextBig>{cardCompany}</CardTextBig>
            </CardTop>
            <CardMiddle>
              <BigCardChip />
            </CardMiddle>
            <CardBottom>
              <CardBottomNumber>
                <CardTextBig>{`${cardNum.first} ${
                  cardNum.second
                } ${replaceCardNumToDot(cardNum.third)} ${replaceCardNumToDot(
                  cardNum.forth,
                )}`}</CardTextBig>
              </CardBottomNumber>
              <CardBottomInfo>
                <CardTextBig>{userName}</CardTextBig>
                <CardTextBig>
                  {expiredDate.month} / {expiredDate.year}
                </CardTextBig>
              </CardBottomInfo>
            </CardBottom>
          </BigCard>
        </CardBox>
        <InputContainer width={100} flexCenter>
          <InputUnderline
            width={75}
            type="text"
            placeholder="카드의 별칭을 입력해주세요."
            value={cardNickname}
            onChange={updateCardNickname}
          />
        </InputContainer>
        <ButtonBox mt={50}>
          <ButtonText onClick={goToCardListPage}>다음</ButtonText>
        </ButtonBox>
      </App>
    </Root>
  );
};

export default CardAddCompletedPage;
