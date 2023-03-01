import { memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useInputChange } from '@/hooks/useInputChange';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';

const initialState = '';

type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardCVCInput = ({ onChange, dirtyState }: Props) => {
  const [cvc, setCVC] = useState(initialState);
  const keyPressInterceptor = useNumberKeyInterceptor();
  const handleInputChange = useInputChange();

  const isCVCValid = useMemo(
    () => Boolean(cvc.length === CVC_MIN_LENGTH),
    [cvc]
  );

  const errorMessage = useMemo(() => {
    if (!(cvc.length === CVC_MIN_LENGTH)) return ERROR_MESSAGE.UNDER_MIN_LENGTH;
  }, [cvc]);

  useEffect(() => {
    onChange(cvc);
  }, [cvc, onChange]);

  return (
    <InputContainer
      label="보안코드(CVC/CVV)"
      isError={dirtyState && !isCVCValid}
      errorMessage={errorMessage}
    >
      <input
        type="password"
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCVC)}
        maxLength={3}
      />
    </InputContainer>
  );
};

export default memo(CardCVCInput);

const CVC_MIN_LENGTH = 3;

const ERROR_MESSAGE = {
  UNDER_MIN_LENGTH: 'CVC 세자리를 모두 입력해주세요.',
};
