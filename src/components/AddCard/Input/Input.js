import styled from "@emotion/styled";

const Input = ({ field, onChange, background }) => {
  const { ariaLabel, ...rest } = field;

  return (
    <Item
      aria-label={ariaLabel}
      {...rest}
      onChange={onChange}
      background={background}
    />
  );
};

const Item = styled.input`
  flex: 1;
  position: relative;
  display: block;
  width: 100%;
  padding: 12px 0;
  border: none;
  background: ${({ background }) => (background ? "#ecebf1" : "none")};
  font-size: 18px;
  text-align: center;
  letter-spacing: 10px;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
