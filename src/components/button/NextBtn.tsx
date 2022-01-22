import React from "react";

const NextBtn: React.FC<React.HTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <div className="button-box">
      <button className="button button-text " {...props}>
        다음
      </button>
    </div>
  );
};

export default NextBtn;
