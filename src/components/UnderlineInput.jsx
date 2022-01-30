import styled from "styled-components";

function UnderlineInput({ type, placeholder, onChange, ...otherProps }) {
  return (
    <InputUnderline
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={otherProps.maxLength}
      width={otherProps.width}
    ></InputUnderline>
  );
}

export default UnderlineInput;

const InputUnderline = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: 16px;
  text-align: center;
  border: none;
  background: none;
  outline: none;
  margin: 16px 0;
  padding: 4px 0;
  border-bottom: 1px solid #383838;
`;
