import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ title, size, onClick }) => {
    size ? (size = `mt-${size}`) : (size = undefined);
    return (
        <div className={['button-box', size].join(' ')} onClick={onClick}>
            <span className="button-text">{title}</span>
        </div>
    );
};

Button.propTypes = {
    /**
     * 타이틀
     */
    title: PropTypes.string,
    /**
     * mt
     */
    size: PropTypes.number,
    /**
     * 클릭 이벤트
     */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    title: undefined,
};
