import { css, cx } from '@emotion/css';

import { Dash } from 'components/common';
import { Masking } from 'components/domain';

import { MAX_LENGTH } from 'constants/card';
import { THEME } from 'constants/colors';

import { CardCompany, ICardWithoutId } from 'types/card';

export interface CardProps extends Omit<ICardWithoutId, 'company'> {
  company?: CardCompany;
}

function Card({ company = CardCompany.Hana, owner, numbers, expiredDate }: CardProps) {
  const { num1, num2, num3, num4 } = numbers;
  const { year, month } = expiredDate;

  return (
    <div className="card-box">
      <div
        className={cx(
          'small-card',
          css`
            background-color: ${THEME[company]};
          `
        )}
      >
        <div className="card-top">
          <span className="card-text">{company}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-number">{num1}</span>
            {num1.length === MAX_LENGTH.CARD_NUMBER && <Dash width={4} height={1} />}
            <span className="card-number">{num2}</span>
            {num2.length === MAX_LENGTH.CARD_NUMBER && <Dash width={4} height={1} />}
            <Masking count={num3.length} />
            {num3.length === MAX_LENGTH.CARD_NUMBER && <Dash width={4} height={1} />}
            <Masking count={num4.length} />
          </div>
          <div className="card-bottom__info">
            <span className={'card-text__owner'}>{owner}</span>
            <div
              className={css`
                margin-right: 12px;
              `}
            >
              <span className="card-text__date">{month}</span>
              {month.length === MAX_LENGTH.EXPIRED_DATE && (
                <span
                  className={css`
                    color: #000;
                    padding: 4px 0 0;
                  `}
                >
                  /
                </span>
              )}
              <span className="card-text__date">{year}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
