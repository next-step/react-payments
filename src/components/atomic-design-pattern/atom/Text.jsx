import classNames from "classnames";
export default function Text({ children, className, ...props }) {
  return (
    <span className={classNames("card-text", className)} {...props}>
      {children}
    </span>
  );
}
