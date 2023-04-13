import React, { ForwardedRef, forwardRef } from 'react';
import useNumberInput from '../../hooks/useNumbersInput';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';
import { ToolTip } from '../ToolTip';

const CVC_MAX_LENGTH = CARD_INPUT.CVC.LENGTH;

function CvcInput(
  { onChange, onFulfill, prevRef, nextRef }: TCardComponentProps<string[]>,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  const {
    numbers: cvc,
    handleChange,
    refs,
  } = useNumberInput({
    initValues: [''],
    maxLength: CVC_MAX_LENGTH,
    onChange,
    onFulfill,
    prevRef,
    nextRef,
    forwardedRef,
  });

  return (
    <InputContainer title="보안코드(CVC/CVV)" width={25} tied={false}>
      <div className="flex">
        <div className="input-box w-25">
          <input
            required
            ref={(el: HTMLInputElement) => (refs.current[0] = el)}
            className="input-basic"
            type="password"
            maxLength={CVC_MAX_LENGTH}
            onChange={(event) => handleChange(event, 0)}
            value={cvc}
          />
        </div>
        <ToolTip>카드 뒷면에서 찾을 수 있으며 보통 3-4글자로 되어 있습니다.</ToolTip>
      </div>
    </InputContainer>
  );
}

const ForwardedCvcRef = forwardRef(CvcInput);
ForwardedCvcRef.displayName = 'CvcInput';

export default React.memo(ForwardedCvcRef);
