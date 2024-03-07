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
        handleCardInfoChange={handleCardInfoChange}
      />
      <InputCardExpiredDate
        cardInfo={cardInfo}
        handleCardInfoChange={handleCardInfoChange}
      />
      <InputCardOwner
        cardInfo={cardInfo}
        handleCardInfoChange={handleCardInfoChange}
      />
      <InputCardCVC
        cardInfo={cardInfo}
        handleCardInfoChange={handleCardInfoChange}
      />
      <InputCardPassword
        cardInfo={cardInfo}
        handleCardInfoChange={handleCardInfoChange}
      />
    </>
  );
}
