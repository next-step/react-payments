import { Input, InputContainer } from '../../components/form';
import { IRegisterCard } from '../../pages/RegisterCard';
import { memo, useCallback, useRef, useState } from 'react';
import { onlyNumber } from '../../utils/keyInterceptor';

const MAX_LENGTH = 3;
const VALIDATE_ERROR = '보안코드를 올바르게 입력 해 주세요.';

function SecurityCodeContainer({ onChange }: IRegisterCard) {
  const [errorMessage, setErrorMessage] = useState('');
  const securityCodeRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(() => {
    const cardSecurityCode = securityCodeRef.current.value;

    onChange({ cardSecurityCode: Number(cardSecurityCode) });
    setErrorMessage(cardSecurityCode.length !== MAX_LENGTH ? VALIDATE_ERROR : '');
  }, []);

  return (
    <InputContainer title="보안코드(CVC/CVV)" className="w-25" errorMessage={errorMessage}>
      <Input
        type="password"
        maxLength={3}
        ref={securityCodeRef}
        onChange={handleChange}
        onKeyDown={onlyNumber}
      />
    </InputContainer>
  );
}

export default memo(SecurityCodeContainer);