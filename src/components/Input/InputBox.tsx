import type { InputBoxProps } from './Input.types';

const InputBox = ({
  className = '',
  error = false,
  errorMessage = '',
  children,
}: InputBoxProps) => (
  <>
    <div className={className}>{children}</div>
    {error && <span className="input-error-message">{errorMessage}</span>}
  </>
);

export default InputBox;
