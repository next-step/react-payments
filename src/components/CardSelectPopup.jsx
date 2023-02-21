const CardSelectPopup = ({ cardCompanyList, onClick }) => {
  return (
    <>
      <div className="modal-dimmed" onClick={onClick}>
        <div className="modal">
          <div className="flex-center">
            {cardCompanyList.map(({ backgroundColor, company }) => (
              <div
                className="modal-item-container"
                key={company}
                id={`${company}-${backgroundColor}`}
              >
                <div
                  className="modal-item-dot"
                  style={{ background: backgroundColor }}
                ></div>
                <span className="modal-item-name">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardSelectPopup;
