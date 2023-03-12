import CardContainer from '../components/CardContainer';
import Button from '../components/Common/Button';
import { PATH } from '../Constant';
import { useState } from 'react';
import { usePaymentContext, usePaymentAction } from '../Context';
import styled from 'styled-components';

const EditButton = styled(Button)`
  position: absolute;
  bottom: 40px;
  width: calc(100% - 20px);
}`;

const RegistButton = styled(Button)`
  margin-bottom: 10px;
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  padding: 0px 50px;
`;

const CardList = ({ movePage, onDelete }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { cardList } = usePaymentContext();
  const { setCardInfo } = usePaymentAction();

  const handleEdit = (evt) => {
    const clickedElement = evt.currentTarget;
    const { number } = clickedElement.dataset;
    cardList.forEach((cardInfo) => {
      if (cardInfo.number === number) {
        setCardInfo(cardInfo);
      }
    });
    movePage(PATH.SAVE);
  };
  return (
    <main className="flex-column-center">
      <ScrollContainer>
        <RegistButton onClick={() => movePage(PATH.REGIST)} children="+" className="empty-card" />
        {cardList.map((cardInfo) => (
          <CardContainer
            cardInfo={cardInfo}
            handleCardClick={handleEdit}
            handleDelBtnClick={onDelete}
            key={cardInfo.number}
            isEditMode={isEditMode}
          />
        ))}
      </ScrollContainer>
      {!isEditMode && <EditButton children="편집" onClick={() => setIsEditMode(true)} />}
      {isEditMode && <EditButton children="닫기" onClick={() => setIsEditMode(false)} />}
    </main>
  );
};

export default CardList;
