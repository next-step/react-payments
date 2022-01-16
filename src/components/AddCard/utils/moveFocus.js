const moveFocus = ({ currentField, target, maxLength }) => {
  if (!target || currentField.length !== maxLength) {
    return;
  }

  target.focus();
};

export default moveFocus;
