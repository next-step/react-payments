import Card from './Card';
import Button from './Common/Button';
import styled from 'styled-components';

const DeleteButton = styled(Button)`
  position: absolute;
  padding: 0px;
  right: -12px;
  top: -12px;
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  z-index: 10;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const CardContainer = ({ cardInfo, onClick, isEditMode, onDelete }) => {
  return (
    <Container data-number={cardInfo.number}>
      {isEditMode && <DeleteButton children="-" onClick={onDelete} />}
      <Card cardInfo={cardInfo} onClick={onClick} />
      <span className="card-nickname">{cardInfo.nickname}</span>
    </Container>
  );
};

export default CardContainer;
