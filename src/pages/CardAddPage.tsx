import ArrowLeft from '@/assets/arrow-left.svg';
import { AppLayout, CardDisplay, useCard, useFunnel, CardSelectBottomSheet, CardInput } from '@/components';
import { useModal, useStringInput, useSelectCardBrand } from '@/hook';
import { Button, HStack, Typography, VStack } from '@/shared/components';
import { styleToken } from '@/shared/styles';
import { removeAllSpaces } from '@/shared/utils';
import { CardBrand } from '@/type';

export const CardAddPage = () => {
  const { goToPrev, goToNext } = useFunnel();
  const { card, setCard } = useCard();

  const { selected: selectedCardBrand, handleSelect: handleCardBrandSelect } = useSelectCardBrand();
  const {
    isOpen: isCardSelectOpen,
    handleOpen: handleCardSelectOpen,
    handleClose: handleCardSelectClose,
  } = useModal(true);

  const { value: cardNumber, handleChange: handleCardNumberChange } = useStringInput('');
  const { value: expirationDate, handleChange: handleExpirationDateChange } = useStringInput('');
  const { value: ownerName, handleChange: handleOwnerNameChange } = useStringInput('');
  const { value: securityCode, handleChange: handleSecurityCodeChange } = useStringInput('');
  const { value: password, handleChange: handlePasswordChange } = useStringInput('');

  const isValidateCardBrand = Boolean(selectedCardBrand.label);
  const isValidateCardNumber = removeAllSpaces(cardNumber).length === 16;
  const isValidateExpirationDate = removeAllSpaces(expirationDate).length === 4;
  const isValidateSecurityCode = securityCode.length === 3;
  const isValidatePassword = removeAllSpaces(password).length === 2;
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
      ownerName,
      securityCode,
      label: selectedCardBrand.label,
      color: selectedCardBrand.color,
    });
    goToNext();
  };

  return (
    <AppLayout>
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
        <VStack gap="18px" marginTop="20px">
          <VStack justifyContent="center" alignItems="center">
            <CardDisplay
              size="small"
              label={selectedCardBrand.label}
              color={selectedCardBrand.color}
              cardNumber={cardNumber}
              expirationDate={expirationDate}
              ownerName={ownerName}
              onClick={handleCardSelectOpen}
            />
          </VStack>
          <CardInput.Number onChange={handleCardNumberChange} />
          <CardInput.ExpirationDate onChange={handleExpirationDateChange} />
          <CardInput.OwnerName onChange={handleOwnerNameChange} />
          <CardInput.SecurityCode onChange={handleSecurityCodeChange} />
          <CardInput.Password onChange={handlePasswordChange} />
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
    </AppLayout>
  );
};
