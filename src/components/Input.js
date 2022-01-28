import PropTypes from 'prop-types';
import './input.css';

export const Input = ({ type, size, value, placeholder, onChange, shape, maxLength }) => {
    if (size) size = `w-${size}`;

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
    value: PropTypes.string,
    /**
     * input 모양
     */
    shape: PropTypes.string,
    /**
     * input 타입
     */
    type: PropTypes.string,
    size: PropTypes.number,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    /**
     * 최대 자릿수
     */
    maxlength: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    size: 'basic',
    onChange: () => {},
};
