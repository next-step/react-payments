const Input = ({
  type = 'text',
  maxLength,
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
      required={required}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
