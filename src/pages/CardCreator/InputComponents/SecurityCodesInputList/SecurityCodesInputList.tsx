import React, { memo } from 'react';

import { useGetErrorMessage } from '@/hooks';
import { SecurityCodesState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { SecurityCodeInput } from './SecurityCodeInput';

interface SecurityCodesInputListProps {
  securityCodes?: SecurityCodesState;
}

function SecurityCodesInputList({ securityCodes }: SecurityCodesInputListProps) {
  const errorMessage = useGetErrorMessage(securityCodes);

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      {securityCodes?.map((securityCode, i) => {
        return <SecurityCodeInput key={securityCode.key} securityCode={securityCode} index={i} />;
      })}
    </CardInputWrapperPure>
  );
}

export const SecurityCodesInputListPure = memo(SecurityCodesInputList);
