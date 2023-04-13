import React, { ForwardedRef, forwardRef } from 'react';
import useNumberInput from '../../hooks/useNumbersInput';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';
import { ToolTip } from '../ToolTip';
import { NumberInput } from '../NumberInput';

const CVC_MAX_LENGTH = CARD_INPUT.CVC.LENGTH;

function CvcInput(
  { value, onChange, onFulfill, nextRef }: TCardComponentProps<string>,
  forwardedRef: ForwardedRef<HTMLInputElement>
) {
  const handleChange = (value: string) => {
    onChange?.(value);
    handleFullfilled(value);
  };

  const handleFullfilled = (value: string) => {
    if (value.length == CARD_INPUT.CVC.LENGTH) {
      nextRef?.current?.focus();
    }
  };

  return (
    <InputContainer title="보안코드(CVC/CVV)" width={25} tied={false}>
      <div className="flex">
        <div className="input-box w-25">
          <NumberInput
            required
            type="password"
            minLength={CVC_MAX_LENGTH}
            maxLength={CVC_MAX_LENGTH}
            onChange={handleChange}
            onKeyDown={() => {
              /** */
            }}
            value={value || ''}
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
