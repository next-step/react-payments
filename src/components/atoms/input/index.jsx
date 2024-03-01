import PropTypes from "prop-types";
import "../../../../styles/input.css";
import useInput from "../../../hooks/useInput";

const Input = (props) => {
  const { type, name, secret, maxLength, min, max, digit, placeholder } = props;
  const input = useInput({ name, maxLength, min, max, digit });

  return (
    <input
      className={secret && "input-secret"}
      type={type}
      placeholder={placeholder}
      {...input}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  secret: PropTypes.bool,
  maxLength: PropTypes.number,
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
