import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";
import Text from "../../atoms/text";

const InputLength = (props) => {
  const { name, maxLength } = props;
  const { watch } = useFormContext();

  const value = watch(name) || "";
  const length = value.length;

  return (
    <Text>
      {length} / {maxLength}
    </Text>
  );
};

InputLength.propTypes = {
  name: PropTypes.string,
  maxLength: PropTypes.number,
};

export default InputLength;
