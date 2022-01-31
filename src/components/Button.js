import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ title, marginTop, onClick }) => {
    if (marginTop) marginTop = `mt-${marginTop}`;

    return (
        <div className={['button-box', marginTop].join(' ')} onClick={onClick}>
            <span className="button-text">{title}</span>
        </div>
    );
};

Button.propTypes = {
    title: PropTypes.string,
    marginTop: PropTypes.number,
    onClick: PropTypes.func,
};
