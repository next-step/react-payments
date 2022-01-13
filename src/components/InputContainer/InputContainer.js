import styled from "@emotion/styled";

const InputContainer = ({ id, width, label, children }) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputWrap width={width}>{children}</InputWrap>
    </Container>
  );
};

const Container = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const InputWrap = styled.div`
  display: flex;
  width: ${({ width }) => width};
  input + input {
    margin-left: 5px;
  }
`;

const Label = styled.label`
  font-size: 12px;
  margin-bottom: 4px;
  color: #525252;
`;

export default InputContainer;
