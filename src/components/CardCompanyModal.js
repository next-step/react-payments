const CompanyNames = [
  [
    { index: "0", name: "사성" },
    { index: "1", name: "형대" },
    { index: "2", name: "룻데" },
    { index: "3", name: "버씨" },
  ],
  [
    { index: "4", name: "궁민" },
    { index: "5", name: "심한" },
    { index: "6", name: "누리" },
    { index: "7", name: "하니" },
  ],
];

export default function CardCompanyModal({ handleModalClick }) {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="flex-center">
          {CompanyNames[0].map((value, index) => {
            return (
              <div
                className="modal-item-container"
                onClick={handleModalClick}
                key={index}
              >
                <div className={"modal-item-dot dot" + value["index"]}></div>
                <span className="modal-item-name">{value["name"]} 카드</span>
              </div>
            );
          })}
        </div>
        <div className="flex-center">
          {CompanyNames[1].map((value, index) => {
            return (
              <div
                className="modal-item-container"
                onClick={handleModalClick}
                key={index}
              >
                <div className={"modal-item-dot dot" + value["index"]}></div>
                <span className="modal-item-name">{value["name"]} 카드</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
