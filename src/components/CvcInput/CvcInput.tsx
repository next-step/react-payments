import React, { ForwardedRef, forwardRef } from 'react';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';
import { ToolTip } from '../ToolTip';
import { NumberInput } from '../NumberInput';
import useForwardedRef from '../../hooks/useForwardedRef';
import useBaseInputHandler from '../../hooks/useBaseInputHandler';

const CVC_MAX_LENGTH = CARD_INPUT.CVC.LENGTH;

function CvcInput(
  { value, onChange, nextRef, caption }: TCardComponentProps<string>,
  forwardedRef: ForwardedRef<HTMLInputElement | HTMLButtonElement>
) {
  const { ref } = useForwardedRef({ forwardedRef });
  const { handleChange } = useBaseInputHandler({ onChange, nextRef, maxLength: CVC_MAX_LENGTH });

  return (
    <InputContainer title="보안코드(CVC/CVV)" width={25} tied={false} caption={caption}>
      <div className="flex">
        <div className="input-box w-25">
          <NumberInput
            ref={ref}
            required
            type="password"
            minLength={CVC_MAX_LENGTH}
            maxLength={CVC_MAX_LENGTH}
            onChange={handleChange}
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
