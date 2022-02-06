import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ButtonBox, ButtonText } from 'components/Button/button.style';
import { InputContainer, InputUnderline } from 'components/Input/input.style';
import { Root, PageTitle, FlexCenter, App } from 'components/UI';
import { Card } from 'components/index';
import { CurrentCardContext } from 'utils/cardsUtils';

const CardAddCompletedPage: React.VFC<{
  nicknameRef: React.RefObject<HTMLInputElement>;
}> = ({ nicknameRef }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentCard = useContext(CurrentCardContext);
  const { addCard, deleteCard } = currentCard;
  const { cardNum, userName, expiredDate, cardCompany, cardNickname } =
    currentCard.card;

  const [isFromEdit, setIsFromEdit] = useState(false);

  useEffect(() => {
    if (location.state === 'edit') {
      setIsFromEdit(true);
    }
  }, [location.state]);

  const goBackToList = () => {
    navigate(-1);
  };

  const goToCardListPage = () => {
    addCard();
    navigate('/list');
  };

  const deleteCurrentCard = () => {
    deleteCard(currentCard.card);
    navigate('/list');
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
            placeholder="카드의 별칭 (선택)"
            ref={nicknameRef}
          />
        </InputContainer>
        <ButtonBox mt={50}>
          {isFromEdit && (
            <ButtonText warn onClick={deleteCurrentCard}>
              삭제
            </ButtonText>
          )}
          <ButtonText onClick={isFromEdit ? goBackToList : goToCardListPage}>
            {isFromEdit ? '이전' : '다음'}
          </ButtonText>
        </ButtonBox>
      </App>
    </Root>
  );
};

export default CardAddCompletedPage;
