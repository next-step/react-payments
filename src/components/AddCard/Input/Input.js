import styled from "@emotion/styled";

const Input = ({
  field,
  onChange,
  isFullField,
  separator = "-",
  background,
}) => {
  const { ariaLabel, ref, type, id, name, placeholder, value } = field;

  return (
    <Wrap>
      {isFullField && <em>{separator}</em>}
      <Item
        id={id}
        aria-label={ariaLabel}
        ref={ref}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        background={background}
      />
    </Wrap>
  );
};

const Wrap = styled.p`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  em {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const Item = styled.input`
  flex: 1;
  position: relative;
  display: block;
  width: 100%;
  height: 45px;
  border: none;
  background: ${({ background }) => (background ? "#ecebf1" : "none")};
  text-align: center;
  letter-spacing: 2px;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
