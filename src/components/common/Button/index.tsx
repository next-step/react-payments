import "./button.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  label: string;
  onClick?: () => void;
}

const Button = ({
  backgroundColor = "white",
  type = "button",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      className="button"
      type={type}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
