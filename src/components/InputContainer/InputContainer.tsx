import React, { PropsWithChildren } from "react";

interface Props {
  title?: string;
  className?: string;
}

const InputContainer = ({
  title,
  children,
  className,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <div className="flex flex-col mt-5 w-full">
      <div className="flex items-center">
        <label className="text-xs">{title}</label>
      </div>
      <div
        className={`flex items-center mt-1.5 font-gray-350 rounded ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default InputContainer;
