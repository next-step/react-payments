import { createElement } from "react";
import PropTypes from "prop-types";

const Box = (props) => {
  const { className, as, children } = props;

  const classes = Array.isArray(className) ? className.join(" ") : className;

  return createElement(as, { className: classes }, children);
};

Box.propTypes = {
  as: PropTypes.oneOf(["div", "label"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.node,
};

export default Box;
