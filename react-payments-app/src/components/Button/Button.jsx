const Button = ({ title, type, onClick }) => {
  return (
    <div
      role='button'
      type={type}
      onClick={onClick}
      className='button-box mt-50'
    >
      <span className='button-text'>{title}</span>
    </div>
  );
};

export default Button;
