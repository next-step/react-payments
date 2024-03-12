import { CardInput } from '@/features/card/components/CardInput';
import { useCardInput } from '@/features/card/hooks/useCardInput';
import { VFlex } from '@/components/atoms/VFlex';
import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';

interface Props {
  onNext: () => void;
}
export const CardInputContainer = ({ onNext }: Props) => {
  const {
    input,
    onChangeNumber,
    onChangeExpirationDate,
    onChangeOwner,
    onChangeSecurityCode,
    onChangePassword,
  } = useCardInput();

  return (
    <VFlex className={'gap-4'}>
      <CardInput.Display
        companyName={input.companyName}
        ownerName={input.ownerName}
        cardNumber={input.cardNumber}
        expirationDate={input.expirationDate}
      />
      <CardInput.Number cardNumber={input.cardNumber} onChange={onChangeNumber} />
      <CardInput.ExpirationDate
        expirationDate={input.expirationDate}
        onChange={onChangeExpirationDate}
      />
      <CardInput.Owner ownerName={input.ownerName} onChange={onChangeOwner} />
      <CardInput.SecurityCode securityCode={input.securityCode} onChange={onChangeSecurityCode} />
      <CardInput.Password password={input.password} onChange={onChangePassword} />
      <Button type={'button'} onClick={onNext} className={'ml-auto'}>
        <Text>{'다음'}</Text>
      </Button>
    </VFlex>
  );
};
