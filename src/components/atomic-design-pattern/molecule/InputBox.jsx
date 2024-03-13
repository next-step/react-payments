import classNames from "classnames";

export default function InputBox({ className, children }) {
  return <div className={classNames("input-box", className)}>{children}</div>;
}
