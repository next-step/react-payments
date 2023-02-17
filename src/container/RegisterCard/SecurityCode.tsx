import { InputContainer } from '../index';
import { Input } from '../../components';
import { FormProps } from '../../pages/RegisterCard';
import { useRef } from 'react';
import { useInput } from '../../hooks';

export default function SecurityCode({ filter }: FormProps) {
  const securityCodeRef = useRef();
  const securityCode = useInput('');

  return (
    <InputContainer title="보안코드(CVC/CVV)" className="w-25">
      <Input
        type="password"
        maxLength={3}
        filter={filter}
        ref={securityCodeRef}
        {...securityCode}
      />
    </InputContainer>
  );
}