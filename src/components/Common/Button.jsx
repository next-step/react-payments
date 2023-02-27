const Button = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} {...props}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
