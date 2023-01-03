import { useCardState } from '@/templates/CardAddPage';

const Card = () => {
  const state = useCardState();

  return (
    <div className="card-box">
      <div className="empty-card">
        <div className="card-top">
          <span className="card-text">{state.cardTitle}</span>
        </div>
        <div className="card-middle">
          <div className="small-card__chip"></div>
        </div>
        <div className="card-bottom">
          <div className="card-bottom__number">
            <span className="card-text">{state.cardNumber}</span>
          </div>
          <div className="card-bottom__info">
            <span className="card-text">{state.cardOwner || 'NAME'}</span>
            <span className="card-text">
              {state.cardMonth || 'MM'} / {state.cardYear || 'YY'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
