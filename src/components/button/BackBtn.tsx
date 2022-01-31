import React from "react";

const BackBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button className="button" {...props}>
      {"<"}
    </button>
  );
};

export default BackBtn;
