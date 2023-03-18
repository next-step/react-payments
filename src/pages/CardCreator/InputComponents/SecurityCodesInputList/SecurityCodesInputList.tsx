import React, { memo } from 'react';

import { useGetErrorMessage } from '@/hooks';
import { SecurityCodesState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { SecurityCodeInput } from './SecurityCodeInput';
import { SecurityCodeTooltip } from './SecurityCodeTooltip';
import { StyledSecurityCodesInputList } from './SecurityCodesInputList.styled';

interface SecurityCodesInputListProps {
  securityCodes?: SecurityCodesState;
}

function SecurityCodesInputList({ securityCodes }: SecurityCodesInputListProps) {
  const errorMessage = useGetErrorMessage(securityCodes);

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      <StyledSecurityCodesInputList>
        {securityCodes?.map((securityCode, i) => {
          return <SecurityCodeInput key={securityCode.key} securityCode={securityCode} index={i} />;
        })}
        <SecurityCodeTooltip />
      </StyledSecurityCodesInputList>
    </CardInputWrapperPure>
  );
}

export const SecurityCodesInputListPure = memo(SecurityCodesInputList);
