import PropTypes from "prop-types";
import useInput from "../../../hooks/useInput";
import { createElement } from "react";

const Input = (props) => {
  const {
    as = "input",
    className,
    type,
    required,
    name,
    secret,
    length,
    maxLength,
    min,
    max,
    digit,
    placeholder,
  } = props;
  const input = useInput({
    name,
    length,
    required,
    maxLength,
    min,
    max,
    digit,
  });

  const classes = Array.isArray(className)
    ? props.className.join(" ")
    : props.className;

  return createElement(
    as,
    {
      className: classes + (secret ? " input-secret" : ""),
      type,
      placeholder,
      ...input,
    },
    null
  );
};

Input.propTypes = {
  as: PropTypes.oneOf(["input", "textarea"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  secret: PropTypes.bool,
  maxLength: PropTypes.number,
  length: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  digit: PropTypes.shape({
    pad: PropTypes.string,
    length: PropTypes.number,
    fill: PropTypes.string,
  }),
  placeholder: PropTypes.string,
};

export default Input;
