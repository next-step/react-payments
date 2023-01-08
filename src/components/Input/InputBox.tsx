import type { InputBoxProps } from './Input.types';

const InputBox = ({ className = '', errorMessage = '', children }: InputBoxProps) => (
  <>
    <div className={`input-box ${className}`.trim()}>{children}</div>
    {errorMessage.length > 0 && <span className="input-error-message">{errorMessage}</span>}
  </>
);

export default InputBox;
