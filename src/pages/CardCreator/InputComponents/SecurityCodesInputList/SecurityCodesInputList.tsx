import React, { ForwardedRef, forwardRef, memo, useContext, useImperativeHandle } from 'react';

import { SecurityCodesStoreContext } from '@/stores/cardCreator';

import type { ErrorMessageType } from '../../types';
import { CardInputWrapperPure } from '../components/CardInputWrapper';
import { useErrorMessage } from '../hooks/useErrorMessage';
import { SecurityCodeInput } from './SecutiryCodeInput';

interface SecurityCodesInputListProps {}

export interface SecurityCodesInputListRef {
  setErrorMessage: (messageType: ErrorMessageType) => void;
}

function SecurityCodesInputList(_: SecurityCodesInputListProps, ref: ForwardedRef<SecurityCodesInputListRef>) {
  const [errorMessage, setErrorMessage] = useErrorMessage({
    inValid: '보안번호 3자리를 입력해주세요.',
  });

  const securityCodeStore = useContext(SecurityCodesStoreContext);
  const securityCodes = securityCodeStore?.store;

  useImperativeHandle(ref, () => ({ setErrorMessage }));

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      {securityCodes?.map((securityCode, i) => {
        return <SecurityCodeInput key={securityCode.key} securityCode={securityCode} index={i} />;
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodesInputListPure = memo(forwardRef(SecurityCodesInputList));
