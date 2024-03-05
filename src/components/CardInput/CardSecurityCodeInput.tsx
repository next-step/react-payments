import { ChangeEvent } from 'react';
import {
  CARD_INPUT_COLOR,
  CARD_INPUT_PASSWORD_FONT_SIZE,
  CARD_INPUT_PASSWORD_FONT_WEIGHT,
} from './constants/cardInputStyles';
import { ONLY_NUMBERS_REGEX } from '@/constant';
import { createUseInputConfig, useInputs } from '@/hook';
import { Circle, HStack, Label, TextField, Typography, VStack } from '@/shared/components';

import { styleToken } from '@/shared/styles';

const SECURITY_CODE_INPUT_MAX_VALUE_LENGTH = 3;
const SECURITY_CODE_INPUT_ID = 'security-code-input';

type SecurityCodeInputProps = {
  onChange?: (value: string) => void;
};

export const CardSecurityCodeInput = ({ onChange }: SecurityCodeInputProps) => {
  const {
    values: securityCodeInputValue,
    refs: securityCdoeInputRefs,
    handleChange,
  } = useInputs([createUseInputConfig(SECURITY_CODE_INPUT_MAX_VALUE_LENGTH, ONLY_NUMBERS_REGEX)]);

  const onSecurityCodeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(0)(e);

    onChange?.(value);
  };

  return (
    <VStack>
      <Label htmlFor={SECURITY_CODE_INPUT_ID} variant="caption" color={styleToken.color.gray700}>
        보안 코드(CVC/CVV)
      </Label>
      <HStack alignItems="center" gap="10px">
        <TextField
          id={SECURITY_CODE_INPUT_ID}
          ref={securityCdoeInputRefs[0]}
          type="password"
          variant="filled"
          value={securityCodeInputValue}
          onChange={onSecurityCodeInputChange}
          maxLength={SECURITY_CODE_INPUT_MAX_VALUE_LENGTH}
          width="84px"
          paddingLeft="19px"
          color={CARD_INPUT_COLOR}
          fontSize={CARD_INPUT_PASSWORD_FONT_SIZE}
          fontWeight={CARD_INPUT_PASSWORD_FONT_WEIGHT}
          textAlign="left"
          letterSpacing="8px"
        />
        <Tooltip />
      </HStack>
    </VStack>
  );
};

const Tooltip = () => (
  <Circle
    width="27px"
    height="27px"
    backgroundColor="unset"
    border={`1px solid ${styleToken.color.gray400}`}
    cursor="pointer"
  >
    <Typography color={styleToken.color.gray400} variant="title" fontWeight={styleToken.fontWeight.bold}>
      ?
    </Typography>
  </Circle>
);

CardSecurityCodeInput.displayName = 'CardSecurityCodeInput';
