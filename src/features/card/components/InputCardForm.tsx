import InputCardNumber from "features/card/components/InputCardNumber";
import InputCardExpiredDate from "features/card/components/InputCardExpireDate";
import InputCardCVC from "features/card/components/InputCardCVC";
import InputCardOwner from "features/card/components/InputCardOwner";
import InputCardPassword from "features/card/components/InputCardPassword";

export default function InputCardForm() {
  return (
    <>
      <InputCardNumber />
      <InputCardExpiredDate />
      <InputCardOwner />
      <InputCardCVC />
      <InputCardPassword />
    </>
  );
}
