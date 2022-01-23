import { useContext } from 'react';
import { CardContext } from '../App';

const CardPlus = () => {
  const { setStatus } = useContext(CardContext);
  return (
    <div className="card-box" onClick={() => setStatus('add')}>
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardPlus;
