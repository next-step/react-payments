import styled from "@emotion/styled";

const InputWithLabel = ({ id, label, children }) => {
  const isMultiple = Array.isArray(children);

  return (
    <Wrap>
      <Label htmlFor={id}>{label}</Label>
      {isMultiple ? <InputGroup>{children}</InputGroup> : children}
    </Wrap>
  );
};

const Wrap = styled.div`
  & + & {
    margin-top: 10px;
  }
`;

const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 7px;
`;

const InputGroup = styled.div`
  display: flex;
  background: #ecebf1;
  border-radius: 5px;
`;

export default InputWithLabel;
