import Input from "..";
import { InputClassName, InputList } from "../input.type";

interface InputBoxProps {
  inputList: InputList[];
  className?: Omit<InputClassName, "inputContainerClassName">;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox = ({ inputList, className, onChange }: InputBoxProps) => {
  return (
    <div className={`input-box ${className?.inputBoxClassName}`}>
      {inputList.map(({ value, type, id, placeholder }) => (
        <Input
          key={id}
          value={value}
          type={type}
          id={id}
          placeholder={placeholder}
          className={className?.inputClassName}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default InputBox;
