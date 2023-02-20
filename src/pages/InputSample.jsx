import { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;

    /*     const nextInputs = {
      //spread 문법. 현재 상태의 내용이 이 자리로 온다.
      ...inputs,
      [name]: value,
    }; */
    //객체를 새로운 상태로 쓰겠다.
    setInputs({
      //spread 문법. 현재 상태의 내용이 이 자리로 온다.
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {};

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        이름: {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
