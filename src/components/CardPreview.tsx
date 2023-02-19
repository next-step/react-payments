import React from 'react';
interface ICardProps {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  name: string;
  expire: string;
}

interface IProps {
  data: ICardProps;
}

const CardPreview = ({ data }: IProps) => {
  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top"></div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <span className="card-text">
            {data.digit1 && data.digit1}
            {data.digit2 && '-' + data.digit2}
            {data.digit3 && '-' + '*'.repeat(data.digit3.length)}
            {data.digit4 && '-' + '*'.repeat(data.digit4.length)}
          </span>
          <div className="card-bottom__info">
            <span className="card-text">{data.name || 'NAME'}</span>
            <span className="card-text">{data.expire || 'MM / YY'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
