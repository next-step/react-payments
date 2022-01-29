import styled from "styled-components";

function Input({
  type,
  placeholder,
  required,
  maxLength,
  pattern,
  title,
  onChange,
  ...otherProps
}) {
  return (
    <InputBasic
      type={type}
      placeholder={placeholder}
      required={required}
      maxLength={maxLength}
      pattern={pattern}
      title={title}
      onChange={onChange}
      width={otherProps.width}
      min={otherProps.min}
      max={otherProps.max}
      onBlur={otherProps.onBlur}
      onClick={otherProps.onClick}
      value={otherProps.value}
      disabled={otherProps.disabled}
    />
  );
}

export default Input;

const InputBasic = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: ${(props) => (props.width ? props.width : "100%")};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;
