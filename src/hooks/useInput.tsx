import { useState } from 'react'

/*
[input 버튼]
1) 타입
    * text
    * password (마스킹)
2) 상태
    * 아무것도 입력되지 않은 상태
        * placeholder 유/무
    * 입력 된 상태
        * value를 가짐.   
*/
export default function useInput(
  initialValue = '',
  placeholder?: string,
  constraints?: () => {}, //or validator
) {
  // 입력 제약 로직을 커스텀 훅으로 분리 => 30자 제한 등에 사용 예정
  const [value, setValue] = useState(initialValue)

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    //constraints 제약조건 추가시 validation 필요할 수 있음 -> 이에 따라 input 컴포넌트에서는 빨간 테두리 처리
    setValue(e.currentTarget.value)
    console.log("e.currentTarget.value", e.currentTarget.value);
  }

  return {
    value,
    onChange: handleChange,
  }
}
