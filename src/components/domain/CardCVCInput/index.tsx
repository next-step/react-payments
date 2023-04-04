import { useEffect, useState } from 'react';

import { InfoIcon } from '@/assets';
import { useFormContext } from '@/components/common/Form/FormContext';
import { InputContainer } from '@/components/UI';
import { useModal } from '@/components/UI/Modal';
import { ToolTip, useToolTip } from '@/components/UI/TooTip';
import VirtualKeyboard from '@/components/UI/VirtualKeyboard';
import { useBlur } from '@/hooks/useBlur';

type Props = {
  onChange: <T>(value: T) => void;
};

const initialCVC = {
  val: '',
};

const CardCVCInput = ({ onChange }: Props) => {
  const { dirtyState, makeDirty } = useBlur();
  const {
    open: openToolTip,
    onOpen: onOpenToolTip,
    onClose: onCloseToolTip,
  } = useToolTip();
  const {
    isOpen: open,
    open: openVirtualKeyboard,
    close: closeVirtualKeyboard,
  } = useModal(false);

  const { handleInputChange, dispatch } = useFormContext();
  const [cvc, setCVC] = useState(initialCVC);

  const handleChange = (n: number) => {
    setCVC((prev) => ({ val: prev.val ? prev.val + String(n) : String(n) }));
    cvc.val.length === 3 && closeVirtualKeyboard();
  };

  const handleOpen = () => {
    setCVC(initialCVC);
    openVirtualKeyboard();
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
          onFocus={onOpenToolTip}
          onBlur={onCloseToolTip}
          onChange={handleInputChange(setCVC)}
          maxLength={3}
          readOnly
        />
        <ToolTip
          open={openToolTip}
          onOpen={onOpenToolTip}
          onClose={onCloseToolTip}
          message={CVC_INFO_MESSAGE}
        >
          <InfoIcon width="20px" height="20px" />
        </ToolTip>
      </InputContainer>
      {open && (
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
