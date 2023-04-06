import React, { ForwardedRef, forwardRef } from 'react';
import useNumberInput from '../../hooks/useNumberInput';
import { TCardComponentProps } from '../../domain/payments/types';
import { InputContainer } from '../InputContainer';
import { CARD_INPUT } from '../../constants';

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
    <InputContainer caption="보안코드(CVC/CVV)" width={25}>
      <input
        required
        ref={(el: HTMLInputElement) => (refs.current[0] = el)}
        className="input-basic"
        type="password"
        maxLength={CVC_MAX_LENGTH}
        onChange={(event) => handleChange(event, 0)}
        value={cvc}
      />
    </InputContainer>
  );
}

const ForwardedCvcRef = forwardRef(CvcInput);
ForwardedCvcRef.displayName = 'CvcInput';

export default React.memo(ForwardedCvcRef);
