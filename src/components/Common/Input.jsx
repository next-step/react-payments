const Input = ({
  type = 'text',
  maxLength,
  minLength = 0,
  required,
  onChange,
  value,
  id,
  placeholder = '',
  className = ''
}) => {
  return (
    <input
      id={id}
      className={`input-basic ${className}`}
      type={type}
      maxLength={maxLength}
      minLength={minLength}
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
