import styled from "@emotion/styled";

const InputWithLabel = ({ id, label, children }) => {
  const isMultiple = Array.isArray(children);

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {isMultiple ? <Wrap>{children}</Wrap> : children}
    </div>
  );
};

const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 7px;
`;

const Wrap = styled.ul`
  display: flex;
  background: #ecebf1;
  border-radius: 5px;
`;

export default InputWithLabel;
