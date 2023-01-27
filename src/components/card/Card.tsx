import { useMemo } from "react";
import {
  convertToCardNumbers,
  findCardBrandByPattern,
  ICardDTO,
} from "../../domain";

export default function Card({
  numbers,
  owner,
  expiredMonth,
  expiredYear,
  nickname,
}: ICardDTO) {
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

  const brand = useMemo(() => findCardBrandByPattern(numbers || []), [numbers]);
  const nicknameOrBrand = useMemo(
    () => nickname || brand?.label,
    [brand, nickname]
  );

  return (
    <>
      <div className="card-box">
        <div
          className="small-card"
          style={{ backgroundColor: brand?.colorStyle }}
        >
          <div className="card-top">
            {brand && <span className="card-text">{brand.label} 카드</span>}
          </div>
          <div className="card-middle">
            <div className="small-card__chip" />
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">{cardNumbers}</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{ownerWithLineClamp}</span>
              <span className="card-text">
                {expiredMonth || "MM"} / {expiredYear || "YY"}
              </span>
            </div>
          </div>
        </div>
      </div>
      {nicknameOrBrand && (
        <span className="card-nickname">{nicknameOrBrand}</span>
      )}
    </>
  );
}
