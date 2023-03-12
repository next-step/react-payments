import styled from 'styled-components';

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  z-index: 5;
  .modal {
    height: 220px;
    border-radius: 5px 5px 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: #fff;
    z-index: 10;
    .modal-item-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .modal-item-dot {
      margin: 0.5rem 1rem;
      border-radius: 50%;
      width: 2.8rem;
      height: 2.8rem;
      background-color: #94dacd;
    }
    .modal-item-name {
      font-size: 12px;
      letter-spacing: -0.085rem;
    }
  }
`;

const CardSelectPopup = ({ cardCompanyList, onClick }) => {
  return (
    <ModalContainer onClick={onClick}>
      <div className="modal">
        <div className="flex-center">
          {cardCompanyList.map(({ backgroundColor, company }) => (
            <div
              className="modal-item-container"
              key={company}
              data-company={company}
              data-bgcolor={backgroundColor}
            >
              <div className="modal-item-dot" style={{ background: backgroundColor }}></div>
              <span className="modal-item-name">{company}</span>
            </div>
          ))}
        </div>
      </div>
    </ModalContainer>
  );
};

export default CardSelectPopup;
