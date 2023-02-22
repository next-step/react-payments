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
}) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        name={name}
        className={className}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        required={isRequired}
      ></input>
    </>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  required: PropTypes.bool,
};
