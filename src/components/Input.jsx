import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ type, size, value, placeholder, onChange, shape = 'basic', maxLength }) => {
    size ? (size = `w-${size}`) : (size = undefined);

    return (
        <input
            className={[`input-${shape}`, size].join(' ')}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            maxLength={maxLength}
        />
    );
};

Input.propTypes = {
    /**
     * 값
     */
    value: PropTypes.string,
    /**
     * input 모양
     */
    shape: PropTypes.string,
    /**
     * input 타입
     */
    type: PropTypes.string,
    /**
     * 너비
     */
    size: PropTypes.number,
    /**
     * placeholder
     */
    placeholder: PropTypes.string,
    /**
     * onChange 핸들러
     */
    onChange: PropTypes.func,
    /**
     * 최대 자릿수
     */
    maxlength: PropTypes.string,
};

Input.defaultProps = {
    value: undefined,
    type: 'text',
    size: undefined,
    placeholder: undefined,
    onChange: () => {},
};
