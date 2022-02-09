import isFullField from "./isFullField";

const moveFocus = ({ currentField, target, maxLength }) => {
  if (!target || !isFullField({ field: currentField, maxLength })) {
    return;
  }

  target.focus();
};

export default moveFocus;
