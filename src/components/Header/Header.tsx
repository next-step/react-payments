import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  className?: string;
}

const Header = ({ title, className }: Props): JSX.Element => {
  return <h1 className={`ml-1 text-xl font-bold ${className}`}>{title}</h1>;
};

export default Header;
