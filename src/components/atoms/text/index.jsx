import PropTypes from "prop-types";

const Text = (props) => {
  const { as = "p", className, children } = props;

  const classes = Array.isArray(className) ? className.join(" ") : className;
const As = as;

  return (
    <As className={classes}>
      {children}
    </As>
  );
};

Text.propTypes = {
  as: PropTypes.oneOf(["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Text;
