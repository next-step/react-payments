import { ChangeEvent, memo, useEffect, useMemo, useState } from 'react';

import { InputContainer } from '@/components/UI';
import { useBlur } from '@/hooks/useBlur';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
import { initialCardState } from '@/pages/CardRegisterPage';
import { CardKey } from '@/types';

type Props = {
  onChangeCVC: <T extends CardKey>(state: typeof initialCardState[T]) => void;
};

const CardCVCInput = (props: Props) => {
  const [cvc, setCVC] = useState('');
  const { dirtyState, toggleDirtyState } = useBlur();
  const keyPressInterceptor = useNumberKeyInterceptor();

  const isCVCValid = useMemo(
    () => Boolean(cvc.length === CVC_MIN_LENGTH),
    [cvc]
  );

  const errorMessage = useMemo(() => {
    if (!(cvc.length === CVC_MIN_LENGTH)) return ERROR_MESSAGE.UNDER_MIN_LENGTH;
  }, [cvc]);

  const handleChangeCVC = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value)) {
      setCVC(e.target.value);
    }
  };

  useEffect(() => {
    props.onChangeCVC({ val: cvc, isValid: isCVCValid });
  }, [cvc]);

  return (
    <InputContainer
      label="보안코드(CVC/CVV)"
      isError={dirtyState && !isCVCValid}
      errorMessage={errorMessage}
    >
      <input
        type="password"
        onKeyPress={keyPressInterceptor}
        onChange={handleChangeCVC}
        onBlur={toggleDirtyState}
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
