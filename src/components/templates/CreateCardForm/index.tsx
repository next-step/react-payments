import { useCardInput } from '@/components/pages/CardCreate/useCardInput';
import useOutsideClick from '@/hooks/useOutsideClick';
import chevronLeft from '@assets/icon/chevron_left_24.svg';
import { Box, Button, Container, HFlex, Text, VFlex } from '@components/atoms';
import { Header } from '@components/molecules';
import { CreditCardCompanyPicker, CreditCardTextFields } from '@components/organisms';
import { useRef, useState } from 'react';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function CreateCardForm({ onNext, onPrev }: Props) {
  const {
    fields,
    isErrorField,
    handleCardNumberInputChange,
    handleCardPasswordInputChange,
    handleExpirationMonthInputChange,
    handleExpirationYearInputChange,
    handleOwnerNameInputChange,
    handleVerificationCodeInputChange,
  } = useCardInput();

  const colorPickerRef = useRef<HTMLDivElement>(null);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const areAllInputsFilled = Object.values(fields).every((value) => value.trim() !== '');
  const areAllInputsValid = Object.values(isErrorField).every((value) => !value);
  const disableNextButton = !areAllInputsFilled || !areAllInputsValid;

  const handleNextClick = () => {
    setShowColorPicker(true);
  };

  const hideColorPicker = () => {
    setShowColorPicker(false);
  };

  useOutsideClick({
    ref: colorPickerRef,
    handler: hideColorPicker,
  });

  return (
    <Container className="relative">
      <Header>
        <Button onClick={onPrev} aria-label="뒤로가기 버튼">
          <img src={chevronLeft} alt="" loading="lazy" width={24} height={24} />
        </Button>
        <Text size="xl">카드 추가</Text>
      </Header>

      <Box className="my-4 space-y-6">
        <CreditCardTextFields.CardNumber value={fields.cardNumber} onChange={handleCardNumberInputChange} />

        <VFlex className="gap-2">
          <HFlex className="gap-4">
            <CreditCardTextFields.ExpirationDate
              dateType="month"
              value={fields.expirationMonth}
              onChange={handleExpirationMonthInputChange}
            />

            <CreditCardTextFields.ExpirationDate
              dateType="year"
              value={fields.expirationYear}
              onChange={handleExpirationYearInputChange}
            />
          </HFlex>
          {isErrorField.expirationMonth && (
            <Text error size="sm">
              유효한 월을 입력해주세요.
            </Text>
          )}
        </VFlex>
        <CreditCardTextFields.OwnerName value={fields.ownerName} onChange={handleOwnerNameInputChange} />
        <CreditCardTextFields.VerificationCode
          value={fields.verificationCode}
          onChange={handleVerificationCodeInputChange}
        />
        <CreditCardTextFields.CardPassword value={fields.cardPassword} onChange={handleCardPasswordInputChange} />
      </Box>

      <Box className="w-full">
        <Button className="block ml-auto" disabled={disableNextButton} onClick={handleNextClick}>
          다음
        </Button>
      </Box>
      {showColorPicker && <CreditCardCompanyPicker ref={colorPickerRef} onClick={onNext} />}
    </Container>
  );
}
