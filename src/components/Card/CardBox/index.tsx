import { CardTop } from '@/components/Card/CardTop';

interface Props {
  companyName: string;
  cardName: string;
  MM: number;
  YY: number;
}

export const CardBox = ({ companyName, cardName, MM, YY }: Props) => {
  return (
    <div className="card-box">
      <div className="empty-card">
        <CardTop>{companyName}</CardTop>
        <div className="card-top">{companyName}</div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__info">
            <span className="card-text">{cardName}</span>
            <span className="card-text">
              {MM} / {YY}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
