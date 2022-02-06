import React, { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: Props): JSX.Element => {
  return (
    <input
      className={`bg-gray-250 text-green-350 h-10 w-full text-left outline-none focus:border border-gray-400 rounded ${className}`}
      {...props}
    />
  );
};

export default Input;
