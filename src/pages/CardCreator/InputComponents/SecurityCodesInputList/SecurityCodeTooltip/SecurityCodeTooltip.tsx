import React, { useEffect, useRef, useState } from 'react';
import { BsFillExclamationCircleFill } from 'react-icons/bs';

import { StyledSecurityCodeTooltip, StyledTooltip } from './SecurityCodeTooltip.styled';

export function SecurityCodeTooltip() {
  const [isShowTooltip, setIsShowTooltip] = useState(false);

  const toolTipRef = useRef(null);

  useEffect(() => {
    const windowClickListener = (e: MouseEvent) => {
      if (!isShowTooltip) return;
      if (e.target !== toolTipRef.current) setIsShowTooltip(false);
    };

    window.addEventListener('click', windowClickListener);

    return () => {
      window.removeEventListener('click', windowClickListener);
    };
  }, [isShowTooltip]);

  return (
    <StyledSecurityCodeTooltip onClick={(e) => e.stopPropagation()}>
      <BsFillExclamationCircleFill onClick={() => setIsShowTooltip(true)} />
      {isShowTooltip && (
        <StyledTooltip ref={toolTipRef}>
          <span>카드 뒷면의 보안 번호 3자리를 입력해주세요!</span>
        </StyledTooltip>
      )}
    </StyledSecurityCodeTooltip>
  );
}
