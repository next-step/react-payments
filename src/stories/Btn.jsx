import React from "react";
import PropTypes from "prop-types";
import "../styles/button.css";

const Btn = ({ children, to, ...props }) => {
  return (
    <button
      onClick={evt => {
        if (to) {
          evt.preventDefault();
          evt.stopPropagation();
        }
      }}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Btn;

Btn.propTypes = {
  children: PropTypes.string,
};

Btn.defaultProps = {
  children: "",
};
