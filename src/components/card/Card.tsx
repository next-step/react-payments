import React, { useMemo } from "react";
import { convertToCardNumbers, ICard } from "../../domain";

export default function Card({
  type,
  numbers,
  owner,
  expiredMonth,
  expiredYear,
}: Partial<ICard>) {
  const cardNumbers = useMemo(
    () => (numbers ? convertToCardNumbers(numbers) : ""),
    [numbers]
  );

  const ownerWithLineClamp = useMemo(() => {
    if (!owner) {
      return "NAME";
    }

    const maxLength = 10;
    return owner.length > maxLength ? `${owner.slice(0, maxLength)}...` : owner;
  }, [owner]);

  return (
    <>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">
            {type && <span className="card-text">{type} 카드</span>}
          </div>
          <div className="card-middle">
            <div className="small-card__chip" />
          </div>
          <div className="card-bottom">
            {numbers && (
              <div className="card-bottom__number">
                <span className="card-text">{cardNumbers}</span>
              </div>
            )}
            <div className="card-bottom__info">
              <span className="card-text">{ownerWithLineClamp}</span>
              <span className="card-text">
                {expiredMonth || "MM"} / {expiredYear || "YY"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">법인카드</span>
    </>
  );
}
