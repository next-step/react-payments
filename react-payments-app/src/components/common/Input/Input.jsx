import PropTypes from 'prop-types';

const Input = ({
  name,
  className,
  type,
  value,
  onChange,
  placeholder,
  maxLength,
  isRequired,
  ref,
  readOnly,
}) => {
  return (
    <input
      className={className}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      required={isRequired}
      ref={ref}
      readOnly={readOnly}
    />
  );
};

export default Input;

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
  ref: PropTypes.func || PropTypes.array,
};
