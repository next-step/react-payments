import { useContext } from 'react';
import { AppContext } from '../AppContext';

const CardPlus = () => {
  const { setStatus } = useContext(AppContext);
  return (
    <div className="card-box" onClick={() => setStatus('add')}>
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardPlus;
