import { useEffect, useState } from 'react';

import { InfoIcon } from '@/assets';
import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { ToolTip } from '@/components/UI/TooTip';
import VirtualKeyboard from '@/components/UI/VirtualKeyboard';
import { useBlur } from '@/hooks/useBlur';
import { useBooleanState } from '@/hooks/useBooleanState';

type Props = {
  onChange: <T>(value: T) => void;
};

const initialCVC = {
  val: '',
};

const CardCVCInput = ({ onChange }: Props) => {
  const { dirtyState, makeDirty } = useBlur();
  const [isOpenToolTip, openToolTip, closeToolTip] = useBooleanState();
  const [isOpenVirtualKeyboard, openVirtualKeyboard, closeVirtualKeyboard] =
    useBooleanState();

  const { handleInputChange, dispatch } = useFormContext();
  const [cvc, setCVC] = useState(initialCVC);

  const handleOpen = () => {
    setCVC(initialCVC);
    openVirtualKeyboard();
  };

  const handleChange = (n: number) => {
    const nextCVC = cvc.val ? cvc.val + String(n) : String(n);
    setCVC({ val: nextCVC });
    nextCVC.length === CVC_MIN_LENGTH && closeVirtualKeyboard();
  };

  useEffect(() => {
    onChange({ ...cvc, isValid: !getErrorMessage(cvc) });
    dispatch();
  }, [cvc]);

  return (
    <>
      <InputContainer
        label="보안코드(CVC/CVV)"
        isError={dirtyState && Boolean(getErrorMessage(cvc))}
        errorMessage={getErrorMessage(cvc)}
        onBlur={makeDirty}
      >
        <input
          type="password"
          name="val"
          value={cvc.val}
          onClick={handleOpen}
          onFocus={openToolTip}
          onBlur={closeToolTip}
          onChange={handleInputChange(setCVC)}
          maxLength={3}
          readOnly
        />
        <ToolTip
          open={isOpenToolTip}
          onOpen={openToolTip}
          onClose={closeToolTip}
          message={CVC_INFO_MESSAGE}
        >
          <InfoIcon width="20px" height="20px" />
        </ToolTip>
      </InputContainer>
      {isOpenVirtualKeyboard && (
        <VirtualKeyboard
          onClose={closeVirtualKeyboard}
          onChange={handleChange}
        />
      )}
    </>
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
