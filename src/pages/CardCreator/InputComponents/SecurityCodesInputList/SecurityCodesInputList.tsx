import React, { memo } from 'react';

import { SecurityCodesState } from '@/stores/CardContext';

import { CardInputWrapperPure } from '../components';
import { SecurityCodeInput } from './SecurityCodeInput';
import { SecurityCodeTooltip } from './SecurityCodeTooltip';
import { StyledSecurityCodesInputList } from './SecurityCodesInputList.styled';

interface SecurityCodesInputListProps {
  securityCodes?: SecurityCodesState;
}

function SecurityCodesInputList({ securityCodes }: SecurityCodesInputListProps) {
  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)">
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
