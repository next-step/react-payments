import { useContext } from 'react';
import { AppContext } from '../../AppContext';

const ToList = () => {
  const { setStatus } = useContext(AppContext);
  return (
    <h2 className="page-title" onClick={() => setStatus('list')}>
      &lt; 카드 추가
    </h2>
  );
};

export default ToList;
