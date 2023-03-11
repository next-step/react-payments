import CardCompanyModalItem from "./CardCompanyModalItem";

export default function CardCompanyModal({ handleModalClick }) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="flex-center">
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot1"
          >
            사성 카드
          </CardCompanyModalItem>
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot2"
          >
            형대 카드
          </CardCompanyModalItem>
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot3"
          >
            룻데 카드
          </CardCompanyModalItem>
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot4"
          >
            버씨 카드
          </CardCompanyModalItem>
        </div>
        <div className="flex-center">
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot5"
          >
            궁민 카드
          </CardCompanyModalItem>
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot6"
          >
            심한 카드
          </CardCompanyModalItem>
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot7"
          >
            누리 카드
          </CardCompanyModalItem>
          <CardCompanyModalItem
            handleModalClick={handleModalClick}
            dotColor="dot8"
          >
            하니 카드
          </CardCompanyModalItem>
        </div>
      </div>
    </div>
  );
}
