import PropTypes from "prop-types";

const Box = (props) => {
  const { className, as = "div", children } = props;

  const classes = Array.isArray(className) ? className.join(" ") : className;

  return (
    <div as={as} className={classes}>
      {children}
    </div>
  );
};

Box.propTypes = {
  as: PropTypes.oneOf(["div", "label", "span"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.node,
};

export default Box;
