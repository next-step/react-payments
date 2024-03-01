function Input(props) {
  const {
    className,
    extraClassName,
    type,
    value,
    placeholder,
  } = props;

  return (
    <input
      className={`${className} ${extraClassName || ''}`}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;
