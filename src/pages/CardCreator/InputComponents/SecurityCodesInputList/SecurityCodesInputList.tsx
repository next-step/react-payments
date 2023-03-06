import React, { ForwardedRef, forwardRef, memo, useImperativeHandle } from 'react';

import type { SecurityCodesState, ErrorMessageType } from '../../types';
import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { useErrorMessage } from '../hooks/useErrorMessage';

import { SecurityCodeInput } from './SecutiryCodeInput';

interface SecurityCodesInputListProps {
  securityCodes: SecurityCodesState;
}

export interface SecurityCodesInputListRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function SecurityCodesInputList(
  { securityCodes }: SecurityCodesInputListProps,
  ref: ForwardedRef<SecurityCodesInputListRef>
) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '보안번호 3자리를 입력해주세요.',
  });

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      {securityCodes.map((securityCode, i) => {
        return <SecurityCodeInput key={securityCode.key} securityCode={securityCode} index={i} />;
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodesInputListPure = memo(forwardRef(SecurityCodesInputList));
