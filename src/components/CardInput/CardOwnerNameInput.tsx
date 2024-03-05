import { ChangeEvent } from 'react';
import { CARD_INPUT_COLOR, CARD_INPUT_TEXT_FONT_SIZE, CARD_INPUT_TEXT_FONT_WEIGHT } from './constants/cardInputStyles';
import { createUseInputConfig, useInputs } from '@/hook';
import { HStack, Label, TextField, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';

const OWNER_NAME_INPUT_MAX_VALUE_LENGTH = 30;
const OWNER_NAME_INPUT_ID = 'owner-name-input';
const OWNER_NAME_INPUT_PLACEHOLDER = '카드에 표시된 이름과 동일하게 입력하세요.';

type OwnerNameInputProps = {
  onChange?: (value: string) => void;
};

export const CardOwnerNameInput = ({ onChange }: OwnerNameInputProps) => {
  const {
    values: ownerNameInputValue,
    refs: ownerNameInputRefs,
    handleChange,
  } = useInputs([createUseInputConfig(OWNER_NAME_INPUT_MAX_VALUE_LENGTH)]);

  const onOwnerNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(0)(e);

    onChange?.(value);
  };

  return (
    <VStack>
      <HStack justifyContent="space-between">
        <Label htmlFor={OWNER_NAME_INPUT_ID} variant="caption" color={styleToken.color.gray700}>
          카드 소유자 이름(선택)
        </Label>
        <Typography color={styleToken.color.gray400} variant="caption">
          {ownerNameInputValue[0].length} / {OWNER_NAME_INPUT_MAX_VALUE_LENGTH}
        </Typography>
      </HStack>
      <HStack alignItems="center" gap="10px">
        <TextField
          id={OWNER_NAME_INPUT_ID}
          ref={ownerNameInputRefs[0]}
          variant="filled"
          value={ownerNameInputValue[0]}
          onChange={onOwnerNameInputChange}
          maxLength={OWNER_NAME_INPUT_MAX_VALUE_LENGTH}
          placeholder={OWNER_NAME_INPUT_PLACEHOLDER}
          padding="0 12px"
          color={CARD_INPUT_COLOR}
          fontSize={CARD_INPUT_TEXT_FONT_SIZE}
          fontWeight={CARD_INPUT_TEXT_FONT_WEIGHT}
          textAlign="left"
          _placeholder={{
            fontSize: '16px',
          }}
        />
      </HStack>
    </VStack>
  );
};

CardOwnerNameInput.displayName = 'CardOwnerNameInput';
