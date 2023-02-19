import React, { useRef, useState } from 'react';
import { onNumericKeyDownOnly } from '../../domain/payments/listeners';
import '../../styles/input.css';

const PASSWORD_LENGTH = 4;
const INPUTABLE_PASSWORD_LENGTH = 2;
const isEditable = (idx: number) => idx < INPUTABLE_PASSWORD_LENGTH;

// TODO: 네이밍 PIN으로 수정하기
function PinInput() {
  const [pins, setPins] = useState<string[]>(['', '']);
  const passwordRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
    setPins((pins) => [...pins.slice(0, currentIndex), event.target.value, ...pins.slice(currentIndex + 1)]);

    const nextInput = passwordRefs.current[currentIndex + 1];
    if (nextInput) nextInput.focus();
  };

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      {Array.from({ length: PASSWORD_LENGTH }, (_, idx) =>
        // prettier-ignore
        <input
          key={idx}
          className="input-basic w-15"
          type="password"
          maxLength={1}
          onKeyDown={onNumericKeyDownOnly}
          onChange={(event: React.ChangeEvent<HTMLInputElement>)=>onChange(event, idx)}
          ref={el=>passwordRefs.current[idx]=el}
          value={isEditable(idx) ? pins[idx] :'*'}
          // TODO: 패스워드는 2자리까지만 입력받을 수 있는데 입력 받을 수 없는 나머지 2자리는 input이 아니라 별도의 element로 분리할 것
          disabled={!isEditable(idx)}
        />
      )}
    </div>
  );
}

export default PinInput;
