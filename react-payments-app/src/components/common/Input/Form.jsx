import { Children } from 'react';
import { Form as RouterForm } from 'react-router-dom';

const Form = ({ id, handleSubmit, children, error }) => {
  return (
    <div id='card-form' className='w-90'>
      <form id={id} onSubmit={handleSubmit}>
        {Children.toArray(children)}
      </form>
      <div id='card-form-label' style={{ color: 'red' }}>
        {error}
      </div>
    </div>
  );
};

export default Form;
