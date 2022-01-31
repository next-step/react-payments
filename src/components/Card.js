import PropTypes from 'prop-types';
import './card.css';
import { replaceNumberToDot } from '../utils/index';

export const BasicCard = ({ name, expireDate, cardName, cardNumber, size, nickName }) => {
    const maskingCardNumber = [];

    Object.entries(cardNumber).forEach(([key, value]) => {
        if (key === 'third' || key === 'forth') value = replaceNumberToDot(value);
        maskingCardNumber.push(value);
    });

    return (
        <>
            <div className="card-box">
                <div className={`${size}-card`}>
                    <div className="card-top">{cardName}</div>
                    <div className="card-middle">
                        {size === 'big' ? (
                            <span className="card-text-big">{cardName}</span>
                        ) : (
                            <div className="small-card__chip"></div>
                        )}
                    </div>
                    <div className="card-bottom">
                        <div className="card-bottom__number">
                            <span className="card-text">{maskingCardNumber.join(' ')}</span>
                        </div>
                        <div className="card-bottom__info">
                            <span className={size === 'big' ? 'card-text-big' : 'card-text'}>
                                {name}
                            </span>
                            <span className="card-text">
                                {expireDate.mm}
                                {(expireDate.mm || expireDate.yy) && ' / '}
                                {expireDate.yy}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <span>{nickName}</span>
        </>
    );
};

export const EmptyCard = ({ onClick }) => {
    return (
        <div className="card-box">
            <div className="empty-card" onClick={onClick}>
                +
            </div>
        </div>
    );
};

BasicCard.propTypes = {
    /**
     * 카드 소유자
     */
    name: PropTypes.string,
    cardName: PropTypes.string,
    cardNumber: PropTypes.object,
    expireDate: PropTypes.object,
    nickName: PropTypes.string,
    size: PropTypes.number,
};

BasicCard.defaultProps = {
    cardNumber: {
        first: 1111,
        seconde: 2222,
        third: 3333,
        forth: 4444,
    },
    expireDate: {
        yy: 22,
        mm: 11,
    },
    size: 'empty',
};
