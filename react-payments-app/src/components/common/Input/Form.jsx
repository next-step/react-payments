const Form = ({ id, onSubmit, children, error }) => {
  return (
    <div id='card-form' className='w-90'>
      <form id={id} onSubmit={onSubmit}>
        {children}
      </form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {error}
      </div>
    </div>
  );
};

export default Form;
