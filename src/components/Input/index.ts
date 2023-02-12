import InputContainer from './InputContainer';
import InputBox from './InputBox';
import InputBase from './InputBase';
import InputLabel from './InputLabel';

const Input = Object.assign(InputContainer, {
  Box: InputBox,
  Base: InputBase,
  Label: InputLabel,
});

export default Input;
