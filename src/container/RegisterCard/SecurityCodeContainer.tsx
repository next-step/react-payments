import { Input, InputContainer } from '../../components/form';
import { RegisterCardType } from '../../pages/RegisterCard';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInput } from '../../hooks';

const MAX_LENGTH = 3;

export default function SecurityCodeContainer({ filter, onChange }: RegisterCardType) {
  const [errorMessage, setErrorMessage] = useState('');
  const securityCodeRef = useRef();
  const securityCode = useInput('');
  const isEnterSecurityCode = useMemo(() => securityCode.value.length === MAX_LENGTH, [securityCode]);

  useEffect(() => {
    onChange(securityCode.value);

    if (!isEnterSecurityCode) {
      setErrorMessage('보안코드를 올바르게 입력 해 주세요.');
      return;
    }

    setErrorMessage('');
  }, [securityCode.value]);

  return (
    <InputContainer title="보안코드(CVC/CVV)" className="w-25" errorMessage={errorMessage}>
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