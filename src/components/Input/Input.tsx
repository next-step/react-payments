import React, { InputHTMLAttributes } from "react";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: Props): JSX.Element => {
  return (
    <input
      className={`h-10 w-full rounded border-gray-400 bg-gray-250 text-left text-green-350 outline-none focus:border ${className}`}
      {...props}
    />
  );
};

export default Input;
