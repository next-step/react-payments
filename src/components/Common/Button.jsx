import { useNavigate } from 'react-router-dom';

const Button = ({ children, to, ...props }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={(evt) => {
        if (to) {
          evt.preventDefault();
          evt.stopPropagation();
          navigate(to);
        }
      }}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
