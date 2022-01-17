import React, { ChangeEvent } from 'react';
import { InputBasic } from './styles';

interface InputProps {
  /**
   * Input 타입 설정
   */
  type: 'text' | 'password' | 'number';

  /**
   * Input 최대 길이 설정
   */
  minLength?: number;

  /**
   * Input 최소 길이 설정
   */
  maxLength?: number;

  /**
   * Input Onchange event
   */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;

  /**
   * Input value
   */
  value: number | string;

  /**
   * Input 필수 입력 여부 설정
   */
  required?: boolean;

  /**
   * Input placeholder 입력
   */
  placeholder?: string;

  /**
   * Input width 설정, 픽셀이 아닌 퍼센트 단위
   */
  width?: number;

  /**
   * Input type: number일 때 최대값 설정
   */
  max?: number;

  /**
   * Input type: number일 때 최소값 설정
   */
  min?: number;

  /**
   * Input 내의 유효성 검사 결과가 에러인지 아닌지 여부
   */
  error?: boolean;

  /**
   * Input css : text-align 설정
   */
  textAlign?: 'center' | 'left';
}

const Input = ({
  type,
  minLength,
  maxLength,
  onChange,
  value,
  required,
  placeholder,
  width,
  error,
  max,
  min,
  textAlign = 'center',
}: InputProps) => {
  return (
    <InputBasic
      type={type}
      value={value}
      maxLength={maxLength}
      minLength={minLength}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      width={width}
      error={error}
      max={max}
      min={min}
      textAlign={textAlign}
    />
  );
};

export default Input;
