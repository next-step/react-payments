import Input from "..";
import { InputClassName, InputList } from "../input.type";
import InputBox from "../InputBox";

interface InputContainerProps {
  className?: InputClassName;
  title?: string;
  inputList: InputList[];
  hasInputBox?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputContainer = ({
  className,
  title,
  inputList,
  hasInputBox = false,
  onChange,
}: InputContainerProps) => {
  return (
    <div className={`input-container ${className?.inputContainerClassName}`}>
      {title && <span className="input-title">{title}</span>}
      {hasInputBox ? (
        <InputBox
          inputList={inputList}
          className={className}
          onChange={onChange}
        />
      ) : (
        inputList.map(({ value, type, id, placeholder }) => (
          <Input
            key={id}
            value={value}
            type={type}
            id={id}
            placeholder={placeholder}
            className={className?.inputClassName}
            onChange={onChange}
          />
        ))
      )}
    </div>
  );
};

export default InputContainer;
