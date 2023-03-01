const Button = ({ title, type, onClick, form }) => {
  return (
    <div className='button-box mt-10'>
      <button form={form} type={type} onClick={onClick} className='button'>
        <span className='button-text'>{title}</span>
      </button>
    </div>
  );
};

export default Button;
