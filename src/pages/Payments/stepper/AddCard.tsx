import { useEffect } from 'react';
import useForm from '@/hooks/useForm';
import useOverlay from '@/hooks/useOverlay';
import { useAutoFocus } from '@/hooks/useAutoFocus';
import { useCardInfoContext } from '@/context/CardInfo';
import Button from '@components/atoms/Button/Button';
import Box from '@components/atoms/Box/Box';
import Header from '@components/organisms/Header/Header';
import CardDisplay from '@components/organisms/CardDisplay/CardDisplay';
import CardHolderName from '@components/organisms/CardHolderName/CardHolderName';
import CardNumber from '@components/organisms/CardNumber/CardNumber';
import ExpirationDate from '@components/organisms/ExpirationDate/ExpirationDate';
import PinNumber from '@components/organisms/PinNumber/PinNumber';
import VerificationCode from '@components/organisms/VerificationCode/VerificationCode';
import CardCompanySelect from '@components/organisms/CardCompanySelect/CardCompanySelect';
import { cardValidate } from '@/utils/cardValidations';
import { FormType } from '@/type/formType';
import { inputFields } from '@/constants/form';

type AddCardProps = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function AddCard({ onPrevious, onNext }: AddCardProps) {
  const { cardInfo, setCardInfo, addCard } = useCardInfoContext();

  const { open: openBottomSheet } = useOverlay();

  const autoFocusMethods = useAutoFocus({
    amount: Object.keys(inputFields).length,
  });

  const onSubmit = () => {
    addCard(cardInfo);
    onNext();
  };

  const { handleSubmit, ...rest } = useForm({
    values: cardInfo,
    setValues: setCardInfo,
    validate: cardValidate,
    autoFocusMethods: autoFocusMethods,
    onSubmit,
  });

  const handleCardDisplayClick = () => {
    openBottomSheet({
      node: (
        <CardCompanySelect
          onChange={setCardInfo}
          onAutoFocus={autoFocusStart}
        />
      ),
    });
  };

  const allFieldsTouched = Object.keys(inputFields).every(
    (key) => rest.touched[key] === true
  );

  const hasNoErrors = Object.values(rest.errors).every((error) => error === '');

  const isNextButtonDisabled = !allFieldsTouched || !hasNoErrors;

  const autoFocusStart = () => {
    autoFocusMethods.autoFocusRefs[1].current?.focus();
  };

  useEffect(() => {
    openBottomSheet({
      node: (
        <CardCompanySelect
          onChange={setCardInfo}
          onAutoFocus={autoFocusStart}
        />
      ),
    });
  }, []);

  return (
    <>
      <Header onPrevious={onPrevious}>카드 추가</Header>

      <CardDisplay
        size='small'
        isHover={true}
        cardInfo={cardInfo as FormType}
        onOpen={handleCardDisplayClick}
      />

      <form onSubmit={handleSubmit}>
        <CardNumber {...rest} />
        <ExpirationDate {...rest} />
        <CardHolderName values={cardInfo as FormType} {...rest} />
        <VerificationCode {...rest} />
        <PinNumber {...rest} />
      </form>

      <Box>
        <Button
          type='submit'
          className='button-text button-success button-active'
          onClick={onSubmit}
          disabled={isNextButtonDisabled}
        >
          다음
        </Button>
      </Box>
    </>
  );
}
