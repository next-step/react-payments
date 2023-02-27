import { stat } from 'fs';
import { ChangeEventHandler } from 'react';

type InputProps = {
  changeHandler: () => void;
  state: string;
};
const Input = ({ changeHandler, state }: InputProps) => {
  return (
    <div>
      <input onChange={changeHandler} value={state} />
    </div>
  );
};

export default Input;
