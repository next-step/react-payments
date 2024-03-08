import useCardInfo from "features/card/hooks/useCardInput";
import InputCardNumber from "features/card/components/InputCardNumber";
import InputCardExpiredDate from "features/card/components/InputCardExpireDate";
import InputCardCVC from "features/card/components/InputCardCVC";
import InputCardOwner from "features/card/components/InputCardOwner";
import InputCardPassword from "features/card/components/InputCardPassword";

export default function InputCardForm() {
  const { cardInfo, handleCardInfoChange } = useCardInfo();

  return (
    <>
      <InputCardNumber
        cardInfo={cardInfo}
        onChangeCardInfo={handleCardInfoChange}
      />
      <InputCardExpiredDate
        cardInfo={cardInfo}
        onChangeCardInfo={handleCardInfoChange}
      />
      <InputCardOwner
        cardInfo={cardInfo}
        onChangeCardInfo={handleCardInfoChange}
      />
      <InputCardCVC
        cardInfo={cardInfo}
        onChangeCardInfo={handleCardInfoChange}
      />
      <InputCardPassword
        cardInfo={cardInfo}
        onChangeCardInfo={handleCardInfoChange}
      />
    </>
  );
}
