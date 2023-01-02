import InputContainer from './InputContainer';
import InputBox from './InputBox';
import InputBase from './InputBase';

const Input = Object.assign(InputContainer, {
  Box: InputBox,
  Base: InputBase,
});

export default Input;
