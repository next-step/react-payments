import React from "react";

const BackButton: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button className="button" {...props}>
      {"<"}
    </button>
  );
};

export default BackButton;
