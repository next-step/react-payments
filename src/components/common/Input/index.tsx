import "./input.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  className,
  type = "text",
  value,
  placeholder,
  onChange,
}: InputProps) => {
  return (
    <input
      className={`input-basic ${className}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
