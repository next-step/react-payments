import {
  CardBox,
  CardNumberFields,
  ExpirationInputBox,
  SecretCodeInputBox,
  PasswordInputBox,
  OwnerNameInputBox,
  NextButtonBox,
  TitleBox,
  CardSelectModal,
  CardSelectButton,
} from '@/components/CardAdd';
import { useCardCompanyModalContext } from '@/context';

export default function CardAdd() {
  const { isModalOpen } = useCardCompanyModalContext();

  return (
    <div className="root">
      <form className="app">
        {isModalOpen && <CardSelectModal />}
        <TitleBox />
        <CardBox />
        <CardSelectButton />
        <CardNumberFields />
        <ExpirationInputBox />
        <OwnerNameInputBox />
        <SecretCodeInputBox />
        <PasswordInputBox />
        <NextButtonBox />
      </form>
    </div>
  );
}
