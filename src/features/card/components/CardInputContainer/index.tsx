import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import { VFlex } from '@/components/atoms/VFlex';
import { CardInput } from '@/features/card/components/CardInput';
import { useChangeCardInput } from '@/features/card/hooks/useChangeCardInput';
import { useIsValidCardForm } from '@/features/card/hooks/useIsValidCardForm';

import { useCard } from '../../providers/CardProvider';

interface Props {
  onNext: () => void;
}
export const CardInputContainer = ({ onNext }: Props) => {
  const { input, addCard } = useCard();
  const {
    onChangeNumber,
    onChangeExpirationDate,
    onChangeOwner,
    onChangeSecurityCode,
    onChangePassword,
  } = useChangeCardInput();
  const { isValid } = useIsValidCardForm();

  const submitCardForm = () => {
    if (!isValid) {
      alert('카드 정보를 정확히 입력해주세요.');
      return;
    }
    addCard(input);
    onNext();
  };

  return (
    <VFlex className={'gap-4'}>
      <CardInput.Display card={input} />
      <CardInput.Number cardNumber={input.cardNumber} onChange={onChangeNumber} />
      <CardInput.ExpirationDate
        expirationDate={input.expirationDate}
        onChange={onChangeExpirationDate}
      />
      <CardInput.Owner ownerName={input.ownerName} onChange={onChangeOwner} />
      <CardInput.SecurityCode securityCode={input.securityCode} onChange={onChangeSecurityCode} />
      <CardInput.Password password={input.password} onChange={onChangePassword} />
      <Button type={'button'} onClick={submitCardForm} className={'ml-auto'}>
        <Text>{'다음'}</Text>
      </Button>
    </VFlex>
  );
};
