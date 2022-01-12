import styled from "@emotion/styled";

const BasicInput = ({
  id,
  type,
  name,
  value,
  placeholder = "",
  width,
  onChange,
}) => {
  const handleChange = ({ target: { name, value } }) => {
    onChange({ name, value });
  };

  return (
    <Input
      type={type}
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      width={width}
      onChange={handleChange}
    />
  );
};

const Input = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: ${({ width }) => `${width || "100%"}`};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default BasicInput;
