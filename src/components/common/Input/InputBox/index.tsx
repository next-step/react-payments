import Input from "..";
import { InputClassName, InputList } from "../input.type";

interface InputBoxProps {
  inputList: InputList[];
  className?: Omit<InputClassName, "inputContainerClassName">;
}

const InputBox = ({ inputList, className }: InputBoxProps) => {
  return (
    <div className={`input-box ${className?.inputBoxClassName}`}>
      {inputList.map(({ value, type, placeholder }) => (
        <Input
          key={value}
          value={value}
          type={type}
          placeholder={placeholder}
          className={className?.inputClassName}
        />
      ))}
    </div>
  );
};

export default InputBox;
