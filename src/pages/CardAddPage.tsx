import { FocusEvent } from 'react';
import ArrowLeft from '@/assets/arrow-left.svg';
import { AppLayout, CardDisplay, useCard, useFunnel, CardSelectBottomSheet, CardInput } from '@/components';
import { ONLY_NUMBERS_REGEX } from '@/constant';
import { useModal, useSelectCardBrand, useInputs, createUseInputConfig } from '@/hook';
import { Box, Button, HStack, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { removeAllSpaces } from '@/shared/utils';
import { CardBrand } from '@/type';

const CARD_NUMBER_ID = 'card-number';
const CARD_NUMBER_INPUT_CONFIG = createUseInputConfig(4, ONLY_NUMBERS_REGEX);
const CARD_EXPIRATION_DATE = createUseInputConfig(2, ONLY_NUMBERS_REGEX);
const CARD_SECURITY_CODE = createUseInputConfig(3, ONLY_NUMBERS_REGEX);
const CARD_PASSWORD = createUseInputConfig(1, ONLY_NUMBERS_REGEX);

export const CardAddPage = () => {
  const { goToPrev, goToNext } = useFunnel();
  const { card, setCard } = useCard();

  const { selected: selectedCardBrand, handleSelect: handleCardBrandSelect } = useSelectCardBrand();
  const {
    isOpen: isCardSelectOpen,
    handleOpen: handleCardSelectOpen,
    handleClose: handleCardSelectClose,
  } = useModal(true);

  const {
    values: cardNumber,
    refs: cardNumberInputRefs,
    handleChange: handleCardNumberChange,
    handleKeyUp: handleCardNumberKeyDown,
  } = useInputs([
    CARD_NUMBER_INPUT_CONFIG,
    CARD_NUMBER_INPUT_CONFIG,
    CARD_NUMBER_INPUT_CONFIG,
    CARD_NUMBER_INPUT_CONFIG,
  ]);

  const {
    values: expirationDate,
    refs: expirationDateRefs,
    handleChange: handleExpirationDateChange,
    handleKeyUp: handleExpirationDateKeyUp,
  } = useInputs([CARD_EXPIRATION_DATE, CARD_EXPIRATION_DATE]);
  const handleExpirationDateBlur = (index: number) => (e: FocusEvent<HTMLInputElement>) => {
    if (e.target.value.length === 1) {
      if (e.target.value === '0') {
        e.target.value = '';
      } else {
        e.target.value = `0${e.target.value}`;
      }
    }
    handleExpirationDateChange(index)(e);
  };

  const {
    values: ownerName,
    refs: ownerNameRefs,
    handleChange: handleOwnerNameChange,
    handleKeyUp: handleOwnerNameKeyUp,
  } = useInputs();

  const {
    values: securityCode,
    refs: securityCodeRefs,
    handleChange: handleSecurityCodeChange,
    handleKeyUp: handleSecurityCodeKeyUp,
  } = useInputs([CARD_SECURITY_CODE]);

  const {
    values: password,
    refs: passwordRefs,
    handleChange: handlePasswordChange,
    handleKeyUp: handlePasswordKeyUp,
  } = useInputs([CARD_PASSWORD, CARD_PASSWORD]);

  const isValidateCardBrand = Boolean(selectedCardBrand.label);
  const isValidateCardNumber = removeAllSpaces(cardNumber.join('')).length === 16;
  const isValidateExpirationDate = removeAllSpaces(expirationDate.join('')).length === 4;
  const isValidateSecurityCode = securityCode[0].length === 3;
  const isValidatePassword = removeAllSpaces(password.join('')).length === 2;
  const isValidateCardState =
    isValidateCardBrand &&
    isValidateCardNumber &&
    isValidateExpirationDate &&
    isValidateSecurityCode &&
    isValidatePassword;

  const handleCardSelectSubmit = (cardBrand: CardBrand) => {
    handleCardBrandSelect(cardBrand);
    handleCardSelectClose();
  };

  const handleCardStateAdd = () => {
    setCard({
      ...card,
      cardNumber,
      expirationDate,
      ownerName: ownerName[0],
      securityCode: securityCode[0],
      label: selectedCardBrand.label,
      color: selectedCardBrand.color,
    });
    goToNext();
  };

  return (
    <>
      {isCardSelectOpen && (
        <CardSelectBottomSheet onSubmit={handleCardSelectSubmit} onOverlayClick={handleCardSelectClose} />
      )}
      <AppLayout.Header>
        <Button
          variant="ghost"
          color="teal"
          fontSize="20px"
          display="flex"
          alignItems="center"
          width="fit-content"
          padding="10px 0"
          onClick={goToPrev}
        >
          <img src={ArrowLeft} alt="이전 페이지 버튼" width="12px" height="12px" />
          <Typography
            variant="title"
            color={styleToken.color.black}
            fontWeight={styleToken.fontWeight.medium}
            marginLeft="10px"
          >
            카드 추가
          </Typography>
        </Button>
      </AppLayout.Header>
      <AppLayout.Body>
        <VStack spacing="18px" marginTop="20px">
          <Box margin="0 auto">
            <CardDisplay
              size="small"
              label={selectedCardBrand.label}
              color={selectedCardBrand.color}
              cardNumber={cardNumber}
              expirationDate={expirationDate}
              ownerName={ownerName[0]}
              onClick={handleCardSelectOpen}
            />
          </Box>
          <CardInput.Number
            id={CARD_NUMBER_ID}
            values={cardNumber}
            label="카드 번호"
            refs={cardNumberInputRefs}
            onChange={handleCardNumberChange}
            onKeyUp={handleCardNumberKeyDown}
            _inputRoot={{
              backgroundColor: `${styleToken.color.gray200}`,
              borderRadius: '7px',
              padding: '0 45px',
            }}
          />
          <CardInput.ExpirationDate
            values={expirationDate}
            onChange={handleExpirationDateChange}
            onKeyUp={handleExpirationDateKeyUp}
            onBlur={handleExpirationDateBlur}
            refs={expirationDateRefs}
          />
          <CardInput.OwnerName
            value={ownerName[0]}
            onChange={handleOwnerNameChange(0)}
            onKeyUp={handleOwnerNameKeyUp(0)}
            ref={ownerNameRefs[0]}
          />
          <CardInput.SecurityCode
            value={securityCode[0]}
            onChange={handleSecurityCodeChange(0)}
            onKeyUp={handleSecurityCodeKeyUp(0)}
            ref={securityCodeRefs[0]}
          />
          <CardInput.Password
            values={password}
            onChange={handlePasswordChange}
            onKeyUp={handlePasswordKeyUp}
            refs={passwordRefs}
          />
        </VStack>
      </AppLayout.Body>
      <AppLayout.Footer>
        <HStack justifyContent="flex-end">
          {isValidateCardState && (
            <Button variant="ghost" color="teal" fontSize="100px" onClick={handleCardStateAdd}>
              다음
            </Button>
          )}
        </HStack>
      </AppLayout.Footer>
    </>
  );
};
