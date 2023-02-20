import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  widthSize?: 'lg' | 'md' | 'sm';
  textAlign?: 'center' | 'left';
  hasInputCount?: boolean;
  inputCount?: number;
}

const Input = (props: InputProps) => {
  const { label, widthSize, textAlign, hasInputCount, inputCount, ...rest } =
    props;
  return (
    <div className={`input-container ${widthSize}`}>
      <div className="input-label">
        {label}
        {hasInputCount && <div className="input-count">{inputCount} / 30</div>}
      </div>
      <input className="input-form" {...rest} style={{ textAlign }} />
    </div>
  );
};

Input.defaultProps = {
  widthSize: 'lg',
  textAlign: 'center',
  hasInputCount: false,
  inputCount: 0,
};

export default Input;
