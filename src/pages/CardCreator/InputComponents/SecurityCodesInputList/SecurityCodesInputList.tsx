import React, { memo } from 'react';

import { SecurityCodesState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { useErrorContext } from '../hooks';
import { SecurityCodeInput } from './SecurityCodeInput';

interface SecurityCodesInputListProps {
  securityCodes?: SecurityCodesState;
}

function SecurityCodesInputList({ securityCodes }: SecurityCodesInputListProps) {
  const errorMessage = useErrorContext(
    {
      inValid: '보안번호 3자리를 입력해주세요.',
    },
    [{ errorType: 'securityCodes', messageType: 'inValid' }]
  );

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      {securityCodes?.map((securityCode, i) => {
        return <SecurityCodeInput key={securityCode.key} securityCode={securityCode} index={i} />;
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodesInputListPure = memo(SecurityCodesInputList);
