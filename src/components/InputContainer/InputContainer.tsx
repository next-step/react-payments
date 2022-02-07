import React, { PropsWithChildren } from "react";

export interface Props {
  title?: string;
  className?: string;
}

const InputContainer = ({ title, children, className }: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div className="mt-5 flex w-full flex-col">
      <div className="flex items-center">
        <label className="text-xs">{title}</label>
      </div>
      <div className={`font-gray-350 mt-1.5 flex items-center rounded ${className}`}>{children}</div>
    </div>
  );
};

export default InputContainer;
