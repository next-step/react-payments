import Card from './Card';
import Button from './Common/Button';

const CardContainer = ({ cardInfo, handleCardClick, isEditMode, handleDelBtnClick }) => {
  return (
    <div className="card-box" data-number={cardInfo.number}>
      {isEditMode && <Button children="-" onClick={handleDelBtnClick} className="delete-button" />}
      <Card cardInfo={cardInfo} onClick={handleCardClick} />
      <span className="card-nickname">{cardInfo.nickname}</span>
    </div>
  );
};

export default CardContainer;
