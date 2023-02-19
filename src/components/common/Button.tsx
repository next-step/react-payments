import React from 'react';

interface IFooter {
  onClick?: () => void;
  text: string;
}

const Button = ({ onClick, text }: IFooter) => {
  return (
    <div className="button-box" onClick={onClick}>
      <span className="button-text">{text}</span>
    </div>
  );
};

export default Button;
