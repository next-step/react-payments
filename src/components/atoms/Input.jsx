function Input(props) {
  const {
    className,
    extraClassName,
    type,
    value,
    placeholder,
    onChange,
    maxLength,
    readOnly,
  } = props;

  return (
    <input
      className={`${className} ${extraClassName || ''}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      readOnly={readOnly}
    />
  );
}

export default Input;
