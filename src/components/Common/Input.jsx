import styled from 'styled-components';

const DefaultInput = styled.input`
  font-size: 16px;
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  &:focus {
    border: 1px solid skyblue;
  }
  & + input {
    margin-left: 10px;
  }
`;

const Input = ({
  type = 'text',
  maxLength,
  minLength = undefined,
  required,
  onChange,
  value,
  id,
  placeholder = '',
  className = ''
}) => {
  return (
    <DefaultInput
      id={id}
      className={className}
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
