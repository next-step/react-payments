import { FC } from 'react';
import styled from 'styled-components';

const Modal: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return (
    <div className='modal-dimmed'>
      <div className='modal'>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
        </div>
        <div className='flex-center'>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
          <div className='modal-item-container'>
            <div className='modal-item-dot'></div>
            <span className='modal-item-name'>클린 카드</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalEl = styled.div`
  width: 100%;
  text-align: right;
`;

export default Modal;
