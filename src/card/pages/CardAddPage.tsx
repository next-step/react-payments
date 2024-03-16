import { CardBrand } from 'src/card/types';
import ArrowLeft from '@/assets/arrow-left.svg';
import {
  isValidateCardBrand,
  isValidateCardNumber,
  isValidateExpirationDate,
  isValidateSecurityCode,
  isValidatePassword,
  CardDisplay,
  CardSelectBottomSheet,
  useSelectCardBrand,
  useCard,
} from '@/card';
import {
  Box,
  Button,
  HStack,
  Typography,
  VStack,
  styleToken,
  isValidateMonthString,
  useFunnel,
  AppLayout,
  FormatInput,
  Tooltip,
  PinInput,
  useToggle,
  useInputValues,
} from '@/shared';

const CARD_NUMBER_ID = 'card-number';
const CARD_EXPIRATION_DATE_ID = 'expiration-date';
const CARD_SECURITY_CODE_ID = 'security-code';
const CARD_PASSWORD_ID = 'password';

const isValidateMonthInput = (monthString: string) => {
  if (monthString.length >= 2 && !isValidateMonthString(monthString)) {
    console.warn('월 형식이 올바르지 않습니다. (01 ~ 12)');
    return false;
  }
  return true;
};

export const CardAddPage = () => {
  const { goToPrev, goToNext } = useFunnel();
  const { card, setCard, isCardExist } = useCard();

  const { value: selectedCardBrand, select: handleCardBrandSelect } = useSelectCardBrand();
  const { value: openedCardSelect, open: openCardSelect, close: closeCardSelect } = useToggle(true);

  const { value: cardNumberInputValues, update: updateCardNumber } = useInputValues(['', '', '', '']);
  const { value: expirationDateInputValues, update: updateExpirationDate } = useInputValues(['', '']);
  const { value: ownerNameInputValues, update: updateOwnerName } = useInputValues(['']);
  const { value: securityCodeInputValues, update: updateSecurityCode } = useInputValues(['']);
  const { value: passwordInputValues, update: updatePassword } = useInputValues(['', '', '']);

  const cardBrandName = selectedCardBrand.label;
  const cardBrandColor = selectedCardBrand.color;
  const cardNumber = cardNumberInputValues.join(' ');
  const expirationDate = expirationDateInputValues.join(' ');
  const ownerName = ownerNameInputValues.join('');
  const securityCode = securityCodeInputValues.join('');
  const password = passwordInputValues.join('');

  const validatedCardBrand = isValidateCardBrand(cardBrandName);
  const validatedCardNumber = isValidateCardNumber(cardNumber);
  const validatedExpirationDate = isValidateExpirationDate(expirationDate);
  const validatedSecurityCode = isValidateSecurityCode(securityCode);
  const validatedPassword = isValidatePassword(password);
  const isValidateCardState =
    validatedCardBrand && validatedCardNumber && validatedExpirationDate && validatedSecurityCode && validatedPassword;

  const cardSelectSubmit = (cardBrand: CardBrand) => {
    handleCardBrandSelect(cardBrand);
    closeCardSelect();
  };

  const updateCardWithGoToNextPage = () => {
    if (!isValidateCardState) {
      return;
    }

    const newCard = {
      ...card,
      cardNumber,
      expirationDate,
      ownerName,
      securityCode,
      label: cardBrandName,
      color: cardBrandColor,
      createdTimestamp: Date.now(),
    };

    if (isCardExist(newCard)) {
      alert('이미 등록된 카드입니다.');
      return;
    }

    setCard(newCard);
    goToNext();
  };

  return (
    <>
      <CardSelectBottomSheet opened={openedCardSelect} onSubmit={cardSelectSubmit} onOverlayClick={closeCardSelect} />
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
              ownerName={ownerName}
              onClick={openCardSelect}
            />
          </Box>

          <FormatInput.Root
            id={CARD_NUMBER_ID}
            type="numeric"
            defaultValue={['', '', '', '']}
            separator={
              <Typography variant="headline" color={styleToken.color.black}>
                -
              </Typography>
            }
            showCompletedSeparator
            onValueChange={updateCardNumber}
          >
            <FormatInput.Label>카드 번호</FormatInput.Label>
            <FormatInput.Control padding="0 20px" gap="6px">
              <FormatInput.Input index={0} maxLength={4} padding="0 0 0 10px" />
              <FormatInput.Input index={1} maxLength={4} padding="0 0 0 10px" />
              <FormatInput.Input
                index={2}
                maxLength={4}
                mask
                padding="0 0 0 10px"
                fontSize="20px"
                letterSpacing="2px"
              />
              <FormatInput.Input
                index={3}
                maxLength={4}
                mask
                padding="0 0 0 10px"
                fontSize="20px"
                letterSpacing="2px"
              />
            </FormatInput.Control>
          </FormatInput.Root>

          <FormatInput.Root
            id={CARD_EXPIRATION_DATE_ID}
            defaultValue={['', '']}
            type="numeric"
            separator={
              <Typography variant="headline" color={styleToken.color.black}>
                /
              </Typography>
            }
            width="140px"
            onValueChange={updateExpirationDate}
          >
            <FormatInput.Label>만료일</FormatInput.Label>
            <FormatInput.Control padding="0 0 0 32px" gap="6px">
              <FormatInput.Input
                index={0}
                maxLength={2}
                placeholder="MM"
                padding="0"
                width="28px"
                validateInput={isValidateMonthInput}
              />
              <FormatInput.Input index={1} maxLength={2} placeholder="YY" padding="0 0 0 4px" />
            </FormatInput.Control>
          </FormatInput.Root>

          <FormatInput.Root id="owner-name" defaultValue={['']} type="all" onValueChange={updateOwnerName} padding="0">
            <FormatInput.Control padding="0" backgroundColor="none">
              <FormatInput.Label>카드 소유자 이름(선택)</FormatInput.Label>
              <FormatInput.TextCounter index={0} />
            </FormatInput.Control>
            <FormatInput.Control padding="0 10px" gap="6px">
              <FormatInput.Input
                index={0}
                maxLength={30}
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                padding="0"
              />
            </FormatInput.Control>
          </FormatInput.Root>

          <FormatInput.Root
            id={CARD_SECURITY_CODE_ID}
            defaultValue={['']}
            type="numeric"
            padding="0"
            onValueChange={updateSecurityCode}
          >
            <FormatInput.Label>보안 코드(CVC/CVV)</FormatInput.Label>
            <HStack spacing="10px" alignItems="center">
              <FormatInput.Control width="85px" padding="0 10px" gap="6px">
                <FormatInput.Input
                  index={0}
                  maxLength={3}
                  mask
                  fontSize="20px"
                  padding="0 0 0 10px"
                  letterSpacing="10px"
                />
              </FormatInput.Control>
              <Tooltip />
            </HStack>
          </FormatInput.Root>

          <PinInput.Root id={CARD_PASSWORD_ID} mask defaultValue={['', '', '0', '0']} onValueChange={updatePassword}>
            <PinInput.Label>카드 비밀번호</PinInput.Label>
            <PinInput.Control>
              <PinInput.Input index={0} fontSize="20px" />
              <PinInput.Input index={1} fontSize="20px" />
              <PinInput.Input index={2} fontSize="20px" readOnly />
              <PinInput.Input index={3} fontSize="20px" readOnly />
            </PinInput.Control>
          </PinInput.Root>
        </VStack>
      </AppLayout.Body>
      <AppLayout.Footer>
        <HStack justifyContent="flex-end">
          {isValidateCardState && (
            <Button variant="solid" color="teal" fontSize="100px" onClick={updateCardWithGoToNextPage}>
              다음
            </Button>
          )}
        </HStack>
      </AppLayout.Footer>
    </>
  );
};
