import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonBox, ButtonText } from 'components/Button/button.style';
import { InputContainer, InputUnderline } from 'components/Input/input.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';
import { CardAddCompletedPageProps } from 'models/page.model';
import { Card } from 'components/index';

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
        <Card
          size="big"
          cardCompany={cardCompany}
          cardNum={cardNum}
          userName={userName}
          expiredMonth={expiredDate.month}
          expiredYear={expiredDate.year}
        />
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
          <ButtonText onClick={goToCardListPage} disabled={!cardNickname}>
            다음
          </ButtonText>
        </ButtonBox>
      </App>
    </Root>
  );
};

export default CardAddCompletedPage;
