import PropTypes from "prop-types";
import Box from "../../atoms/box";
import Text from "../../atoms/text";

// option이라는 속성이 애매모호하지 않을까?
const InputForm = (props) => {
  const { label, option, children } = props;

  return (
    <Box className={"input-container"}>
      <Text className={"input-title"}>
        {label}
        {option}
      </Text>
      <Box className={"input-box"}>{children}</Box>
    </Box>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  option: PropTypes.node,
  children: PropTypes.node,
};

export default InputForm;
