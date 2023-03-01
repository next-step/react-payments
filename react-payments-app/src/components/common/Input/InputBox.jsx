import { Children } from 'react';
import PropTypes from 'prop-types';

const InputBox = ({ name, boxClassName, children }) => {
  return (
    <>
      <div className='input-container'>
        <div className='input-title-box'>
          <label className='input-title' htmlFor={name}>
            {name}
          </label>
          {name === '카드 소유자 이름(선택)' ? (
            <label className='input-title'>{length ? length : 0} / 30</label>
          ) : null}
        </div>
        <div className={boxClassName}>{Children.toArray(children)}</div>
      </div>
    </>
  );
};

export default InputBox;

InputBox.propTypes = {
  name: PropTypes.string.isRequired,
  boxClassName: PropTypes.string,
  children: PropTypes.node,
};
