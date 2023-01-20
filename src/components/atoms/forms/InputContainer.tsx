import React, { PropsWithChildren } from "react";

interface IProps {
  title: string;
}

export default function InputContainer({
  title,
  children,
}: PropsWithChildren<IProps>) {
  return (
    <div className="input-container">
      {title && <span className="input-title">{title}</span>}
      {children}
    </div>
  );
}
