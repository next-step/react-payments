import { InputProps } from './Input.types';

const InputBase: InputProps<never> = ({ className, ...props }) => (
  <input className={`input-basic ${className}`} {...props} />
);

export default InputBase;
