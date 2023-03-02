import { memo, useEffect, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';

import { useFormContext } from '../common/Form/FormContext';

type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardCVCInput = ({ onChange, dirtyState }: Props) => {
  const { handleInputChange, dispatch } = useFormContext();
  const [cvc, setCVC] = useState('');
  const keyPressInterceptor = useNumberKeyInterceptor();

  useEffect(() => {
    onChange({ val: cvc, isValid: !getErrorMessage(cvc) });
    dispatch();
  }, [cvc]);

  return (
    <InputContainer
      label="보안코드(CVC/CVV)"
      isError={dirtyState && Boolean(getErrorMessage(cvc))}
      errorMessage={getErrorMessage(cvc)}
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

const getErrorMessage = (cvc: string) => {
  if (!(cvc.length === CVC_MIN_LENGTH)) return ERROR_MESSAGE.UNDER_MIN_LENGTH;
};
