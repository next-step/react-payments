import { useEffect, useState } from 'react';

import { InfoIcon } from '@/assets';
import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { ToolTip, useToolTip } from '@/components/UI/TooTip';
import { useBlur } from '@/hooks/useBlur';
import { useNumberKeyInterceptor } from '@/hooks/useNumberKeyInterceptor';
type Props = {
  onChange: <T>(value: T) => void;
};

const CardCVCInput = ({ onChange }: Props) => {
  const { dirtyState, makeDirty } = useBlur();
  const {
    open: openToolTip,
    onOpen: onOpenToolTip,
    onClose: onCloseToolTip,
  } = useToolTip();

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
      onBlur={makeDirty}
    >
      <input
        type="password"
        name="val"
        onFocus={onOpenToolTip}
        onBlur={onCloseToolTip}
        onKeyPress={keyPressInterceptor}
        onChange={handleInputChange(setCVC)}
        maxLength={3}
      />
      <ToolTip
        open={openToolTip}
        onOpen={onOpenToolTip}
        message={CVC_INFO_MESSAGE}
      >
        <InfoIcon width="20px" height="20px" />
      </ToolTip>
    </InputContainer>
  );
};

export default CardCVCInput;

const CVC_MIN_LENGTH = 3;

const ERROR_MESSAGE = {
  UNDER_MIN_LENGTH: 'CVC 세자리를 모두 입력해주세요.',
};

const CVC_INFO_MESSAGE = '카드 보안코드(CVC/CVV)는 숫자 세자리 입니다.';

const getErrorMessage = ({ val = '' }: { val?: string }) => {
  if (!(val.length === CVC_MIN_LENGTH)) return ERROR_MESSAGE.UNDER_MIN_LENGTH;
};
