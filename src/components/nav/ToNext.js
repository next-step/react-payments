import { useContext } from 'react';
import { CardContext } from '../../App';

const ToNext = ({ nextStep }) => {
  return (
    <div className="button-box" onClick={nextStep}>
      <span className="button-text">다음</span>
    </div>
  );
};

export default ToNext;
