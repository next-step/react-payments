import React from "react";

interface NextBtnProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const NextBtn: React.FC<NextBtnProps> = (props) => {
  return (
    <div className="button-box">
      <button className="button button-text " {...props}>
        다음
      </button>
    </div>
  );
};

export default NextBtn;
