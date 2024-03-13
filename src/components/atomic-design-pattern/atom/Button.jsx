import classNames from "classnames";

export default function Button({
  variant = "text",
  className,
  children,
  ...props
}) {
  return (
    <button className={classNames(`button-${variant}`, className)} {...props}>
      {children}
    </button>
  );
}
