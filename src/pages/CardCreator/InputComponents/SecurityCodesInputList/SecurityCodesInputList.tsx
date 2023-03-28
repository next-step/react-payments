import React, { memo } from 'react';

import { TCardStore } from '@/stores/CardContext/initialCardStore';

import { CardInputWrapperPure } from '../components';
import { SecurityCodeInput } from './SecurityCodeInput';
import { SecurityCodeTooltip } from './SecurityCodeTooltip';
import { StyledSecurityCodesInputList } from './SecurityCodesInputList.styled';

interface SecurityCodesInputListProps {
  securityCodes: TCardStore['securityCodes'];
}

export const SecurityCodesInputList = memo(function SecurityCodesInputList({
  securityCodes,
}: SecurityCodesInputListProps) {
  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)">
      <StyledSecurityCodesInputList>
        <SecurityCodeInput securityCode={securityCodes[0]} />
        <SecurityCodeTooltip />
      </StyledSecurityCodesInputList>
    </CardInputWrapperPure>
  );
});
