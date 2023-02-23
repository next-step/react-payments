import { Input, InputContainer } from '../../components/form';
import { IRegisterCard } from '../../pages/RegisterCard';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useInput } from '../../hooks';
import { onlyNumber } from '../../utils/filter';

const MAX_LENGTH = 3;

export default function SecurityCodeContainer({ onChange }: IRegisterCard) {
  const [errorMessage, setErrorMessage] = useState('');
  const securityCodeRef = useRef(null);
  const securityCode = useInput('');
  const isEnterSecurityCode = useMemo(() => securityCode.value.length === MAX_LENGTH, [securityCode]);

  useEffect(() => {
    onChange({ cardSecurityCode: Number(securityCode.value) });

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
        filter={onlyNumber}
        ref={securityCodeRef}
        {...securityCode}
      />
    </InputContainer>
  );
}