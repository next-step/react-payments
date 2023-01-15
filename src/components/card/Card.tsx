import React, { useMemo } from "react";
import { ICard } from "../../domain";

export default function Card({
  type,
  numbers,
  owner,
  expiredMonth,
  expiredYear,
}: ICard) {
  const cardNumbers = useMemo(
    () => [...numbers, "****", "****"].join(" - "),
    [numbers]
  );

  return (
    <>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">{type} 카드</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip" />
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">{cardNumbers}</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{owner}</span>
              <span className="card-text">
                {expiredMonth} / {expiredYear}
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">법인카드</span>
    </>
  );
}
