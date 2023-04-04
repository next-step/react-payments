import React, { ForwardedRef, forwardRef } from 'react';
import useNumberInput from '../../hooks/useNumberInput';
import { TCardComponentProps } from '../../domain/payments/types';

const CVC_MAX_LENGTH = 3;

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
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        ref={(el: HTMLInputElement) => (refs.current[0] = el)}
        className="input-basic w-25"
        type="password"
        maxLength={CVC_MAX_LENGTH}
        onChange={(event) => handleChange(event, 0)}
        value={cvc}
      />
    </div>
  );
}

const ForwardedCvcRef = forwardRef(CvcInput);
ForwardedCvcRef.displayName = 'CvcInput';

export default React.memo(ForwardedCvcRef);
