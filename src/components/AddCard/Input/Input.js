import React from "react";

import styled from "@emotion/styled";

const isOverMaxLength = ({ maxLength, valueLength }) =>
  maxLength < valueLength;

const Input = React.forwardRef(
  ({ onChange, background, ...property }, ref) => {
    const { ariaLabel, ...rest } = property;

    const handleChange = ({ target: { name, value, maxLength } }) => {
      if (isOverMaxLength({ maxLength, valueLength: value.length })) {
        return;
      }

      onChange({ name, value });
    };

    return (
      <Item
        aria-label={ariaLabel}
        {...rest}
        ref={ref}
        onChange={handleChange}
        background={background}
      />
    );
  }
);

const Item = styled.input`
  display: block;
  width: 100%;
  padding: 12px 0;
  border: none;
  background: ${({ background }) =>
    background ? "#ecebf1" : "none"};
  font-size: 18px;
  text-align: center;
  letter-spacing: 2px;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default Input;
