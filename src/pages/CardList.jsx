import CardContainer from '../components/CardContainer';
import Button from '../components/Common/Button';
import { PATH } from '../Constant';
import { useState } from 'react';
import { usePaymentContext, usePaymentAction } from '../Context';

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
      <Button
        onClick={() => movePage(PATH.REGIST)}
        children="+"
        className="empty-card button-box"
      />
      {cardList.map((cardInfo) => (
        <CardContainer
          cardInfo={cardInfo}
          handleCardClick={handleEdit}
          handleDelBtnClick={onDelete}
          key={cardInfo.number}
          isEditMode={isEditMode}
        />
      ))}
      {!isEditMode && (
        <Button children="편집" onClick={() => setIsEditMode(true)} className="button" />
      )}
      {isEditMode && (
        <Button children="닫기" onClick={() => setIsEditMode(false)} className="button" />
      )}
    </main>
  );
};

export default CardList;
