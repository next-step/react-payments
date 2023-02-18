import "./input.css";

const Input = ({
  className,
  type = "text",
  value,
  id,
  placeholder,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`input-basic ${className}`}
      type={type}
      value={value}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
