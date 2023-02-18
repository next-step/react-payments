import { InputClassName, InputList } from "../input.type";
import InputBox from "../InputBox";

interface InputContainerProps {
  className?: InputClassName;
  title: string;
  inputList: InputList[];
}

const InputContainer = ({
  className,
  title,
  inputList,
}: InputContainerProps) => {
  return (
    <div className={`input-container ${className?.inputContainerClassName}`}>
      <span className="input-title">{title}</span>
      <InputBox inputList={inputList} className={className} />
    </div>
  );
};

export default InputContainer;
