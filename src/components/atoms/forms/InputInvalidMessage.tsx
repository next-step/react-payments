import { PropsWithChildren } from "react";

export default function InputInvalidMessage({ children }: PropsWithChildren) {
  if (!children) {
    return null;
  }
  return <div className="input-invalid-message">{children}</div>;
}
