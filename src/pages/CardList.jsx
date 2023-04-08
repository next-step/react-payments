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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 208px;
  height: 130px;
  font-size: 30px;
  color: #575757;
  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  user-select: none;
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
    const editCardInfo = cardList.find((cardInfo) => cardInfo.number === number);
    if (editCardInfo) setCardInfo(editCardInfo);
    movePage(PATH.SAVE);
  };
  return (
    <main className="flex-column-center">
      <ScrollContainer>
        <RegistButton onClick={() => movePage(PATH.REGIST)} children="+" className="empty-card" />
        {cardList.map((cardInfo) => (
          <CardContainer
            cardInfo={cardInfo}
            onClick={handleEdit}
            onDelete={onDelete}
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
