import styled from "styled-components";

function Input({ type, placeholder, required, onChange, ...otherProps }) {
  return (
    <InputBasic
      type={type}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      {...otherProps}
    />
  );
}

export default Input;

const InputBasic = styled.input`
  background-color: #ecebf1;
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 45px;
  font-size: 16px;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;
