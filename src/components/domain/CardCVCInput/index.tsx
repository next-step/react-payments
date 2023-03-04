import { useEffect, useState } from 'react';

import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';

type Props = {
  onChange: <T>(value: T) => void;
  dirtyState: boolean;
};

const CardCVCInput = ({ onChange, dirtyState }: Props) => {
  const { handleInputChange, dispatch } = useFormContext();
  const [cvc, setCVC] = useState({});
  const keyPressInterceptor = useNumberKeyInterceptor();

  useEffect(() => {
    onChange({ ...cvc, isValid: !getErrorMessage(cvc) });
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
        name="val"
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCVC)}
        maxLength={3}
      />
    </InputContainer>
  );
};

export default CardCVCInput;

const CVC_MIN_LENGTH = 3;

const ERROR_MESSAGE = {
  UNDER_MIN_LENGTH: 'CVC 세자리를 모두 입력해주세요.',
};

const getErrorMessage = ({ val = '' }: { val?: string }) => {
  if (!(val.length === CVC_MIN_LENGTH)) return ERROR_MESSAGE.UNDER_MIN_LENGTH;
};
