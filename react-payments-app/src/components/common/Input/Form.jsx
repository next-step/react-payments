const Form = ({ handleSubmit, children, formErrorMessage }) => {
  return (
    <div id='card-form' className='w-90'>
      <form onSubmit={handleSubmit}>{children}</form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {formErrorMessage}
      </div>
    </div>
  );
};

export default Form;
