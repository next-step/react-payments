import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  widthSize?: 'lg' | 'md' | 'sm';
  textAlign?: 'center' | 'left';
}

const Input = (props: InputProps) => {
  const { label, widthSize, textAlign, ...rest } = props;
  return (
    <div className={`input-container ${widthSize}`}>
      <div className="input-label">{label}</div>
      <input className="input-form" {...rest} style={{ textAlign }} />
    </div>
  );
};

Input.defaultProps = {
  widthSize: 'lg',
  textAlign: 'center',
};

export default Input;
