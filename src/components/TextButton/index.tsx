import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const TextButton = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <button type="button" className="text-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default TextButton;
