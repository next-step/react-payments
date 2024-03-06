import PropTypes from "prop-types";
import Text from "../../atoms/text";
import { useFormContext } from "../../../hooks/useFormProvider";

const InputLength = (props) => {
  const { name, maxLength } = props;
  const { watch } = useFormContext();

  const value = watch(name) || "";
  const length = value.length;

  return (
    <Text className={"input-text"} as="span">
      {length} / {maxLength}
    </Text>
  );
};

InputLength.propTypes = {
  name: PropTypes.string,
  maxLength: PropTypes.string,
};

export default InputLength;
