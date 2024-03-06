import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Text from "../../atoms/text";

const InputForm = (props) => {
  const { label, side, children } = props;

  return (
    <Box as="label" className={"input-container"}>
      <Text className={"input-title"}>
        {label}
        {side}
      </Text>
      {children}
    </Box>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  option: PropTypes.node,
  children: PropTypes.node,
};

export default InputForm;
