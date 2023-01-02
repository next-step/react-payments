import type { InputProps } from './Input.types';

const InputBox: InputProps = ({ className, children }) => (
  <div className={`input-box ${className}`}>{children}</div>
);

export default InputBox;
