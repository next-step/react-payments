import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import cx from "classnames";

// className="px-6 py-2 bg-neutral-200 border rounded-lg text-lg font-medium border-none focus:bg-neutral-300 focus:outline-none"

interface BaseProps {
  className?: string;
  isFullWidth?: boolean;
  isChecked?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

type Props = BaseProps & InputHTMLAttributes<HTMLInputElement>;

const classes = /* @tw */ {
  container: [
    "py-3",
    "px-4",
    "bg-neutral-200",
    "border-none",
    "text-base",
    "rounded-lg",
    "leading-none",
    "font-bold",
    "text-[#04c09e]",
    "placeholder:text-neutral-600",
    "read-only:focus:bg-white",
    "focus:bg-neutral-300",
    "focus:outline-none",
  ],
};

function Input(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  const { isFullWidth, className, ...rest } = props;
  return (
    <input
      type="text"
      ref={ref}
      {...rest}
      className={cx(isFullWidth && "w-full", classes.container, className)}
    />
  );
}

export default forwardRef(Input);
