import classNames from "classnames";
import { forwardRef } from "react";

const Input = forwardRef(
  ({ type = "text", isHidden = false, className, ...props }, ref) => {
    const combinedClassNames = classNames(
      "input-basic",
      {
        "input-hidden": isHidden,
      },
      className
    );

    return (
      <input type={type} className={combinedClassNames} {...props} ref={ref} />
    );
  }
);
export default Input;
