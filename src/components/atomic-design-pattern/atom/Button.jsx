import classNames from "classnames";

export default function Button({ className, children, ...props }) {
  return (
    <button className={classNames("button-basic", className)}>
      {children}
    </button>
  );
}
