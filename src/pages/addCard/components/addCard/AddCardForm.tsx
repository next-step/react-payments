import Button from "../../../../components/ui-kit/Button";
import useAddCardForm from "../../hooks/useAddCardForm";
import CardExpiredDateInput from "./CardExpiredDateInput";
import CardHolderNameInput from "./CardHolderNameInput";
import CardNumberInput from "./CardNumberInput";
import CardPasswordInput from "./CardPasswordInput";
import CardSecurityCodeInput from "./CardSecurityCodeInput";

export default function AddCardForm() {
  const {
    displayedCardNumber,
    displayedExpiredDate,
    cardHolderName,
    cardSecurityCode,
    firstCardPassword,
    secondCardPassword,
    handleCardNumberChange,
    handleCardExpiredDateChange,
    handleCardHolderNameChange,
    handleCardSecurityCodeChange,
    handleFirstCardPasswordChange,
    handleSecondCardPasswordChange,
    handleSubmit,
  } = useAddCardForm();

  return (
    <form onSubmit={handleSubmit}>
      <CardNumberInput
        value={displayedCardNumber}
        onChange={handleCardNumberChange}
      />
      <CardExpiredDateInput
        value={displayedExpiredDate}
        onChange={handleCardExpiredDateChange}
      />
      <CardHolderNameInput
        value={cardHolderName}
        onChange={handleCardHolderNameChange}
      />
      <CardSecurityCodeInput
        value={cardSecurityCode}
        onChange={handleCardSecurityCodeChange}
      />
      <CardPasswordInput
        firstValue={firstCardPassword}
        secondValue={secondCardPassword}
        onFirstValueChange={handleFirstCardPasswordChange}
        onSecondValueChange={handleSecondCardPasswordChange}
      />
      <div style={{ width: "100%", textAlign: "right" }}>
        <Button type="submit">다음</Button>
      </div>
    </form>
  );
}
