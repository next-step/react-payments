import React, { memo } from 'react';

import { TCardStore } from '@/contexts/CardContext/initialCardStore';

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
  const errorMessage = securityCodes?.find((securityCode) => !!securityCode.errorMessage)?.errorMessage;

  return (
    <CardInputWrapperPure header="보안코드(CVC/CVV)" errorMessage={errorMessage}>
      <StyledSecurityCodesInputList>
        <SecurityCodeInput securityCode={securityCodes[0]} />
        <SecurityCodeTooltip />
      </StyledSecurityCodesInputList>
    </CardInputWrapperPure>
  );
});
