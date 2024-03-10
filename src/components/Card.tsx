import React from "react";

type TCardProps = {
  cardCorporation: string;
  cardNumber: string;
  name: string;
  expireDay: string;
};

export const Card = React.memo(
  ({ cardCorporation, cardNumber, expireDay, name }: TCardProps) => {
    return (
      <>
        <div className="card-box">
          <div className="small-card">
            <div className="card-top">
              <span className="card-text">{cardCorporation}</span>
            </div>
            <div className="card-middle">
              <div className="small-card__chip"></div>
            </div>
            <div className="card-bottom">
              <div className="card-bottom__number">
                <span className="card-text">{cardNumber}</span>
              </div>
              <div className="card-bottom__info">
                <span className="card-text">{name}</span>
                <span className="card-text">{expireDay}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);
