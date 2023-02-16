import { useState } from 'react';
import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';

function AddCard() {
  const [state, setState] = useState();
  const onChange = () => console.log;
  const onSubmit = () => console.log;
  return (
    <div>
      <div className="root">
        <div className="app">
          <h2 className="page-title"> 카드 추가</h2>
          <div className="card-box">
            <Card />
          </div>
          <AddCardForm />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
