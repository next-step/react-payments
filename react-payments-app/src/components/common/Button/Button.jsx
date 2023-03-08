const Button = ({ title, type, onClick, form, style }) => {
  return (
    <div className={`button-box mt-10 ` + style}>
      <button form={form} type={type} onClick={onClick} className='button'>
        <span className='button-text'>{title}</span>
      </button>
    </div>
  );
};

export default Button;
