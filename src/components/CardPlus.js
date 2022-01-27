import { useContext } from 'react';
import { AppContext } from '../AppContext';

const CardPlus = () => {
  const { setRouteStatus } = useContext(AppContext);
  return (
    <div className="card-box" onClick={() => setRouteStatus('add')}>
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardPlus;
