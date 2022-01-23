import { useContext } from 'react';
import { CardContext } from '../../App';

const ToList = () => {
  const { setStatus } = useContext(CardContext);
  return (
    <h2 className="page-title" onClick={() => setStatus('list')}>
      &lt; 카드 추가
    </h2>
  );
};

export default ToList;
