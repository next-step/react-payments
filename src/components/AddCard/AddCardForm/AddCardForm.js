import CardNumberInput from "../CardNumberInput";
import ExpiryDateInput from "../ExpiryDateInput";
import CardOwnerInput from "../CardOwnerInput";
import CardSecurityNumberInput from "../CardSecurityNumberInput";
import CardPasswordInput from "../CardPasswordInput";

const AddCardForm = ({
  fields: {
    cardNumbers,
    expiryDate,
    cardOwner,
    securityNumber,
    cardPassword,
    error,
  },
  onChangeMultipleInput,
  onChangeSingleInput,
  onErrorChange,
}) => (
  <form>
    <CardNumberInput
      fields={cardNumbers}
      onChange={onChangeMultipleInput}
    />
    <ExpiryDateInput
      fields={expiryDate}
      error={error.expiryDate}
      onChange={onChangeMultipleInput}
      onErrorChange={onErrorChange}
    />
    <CardOwnerInput
      value={cardOwner}
      onChange={onChangeSingleInput}
    />
    <CardSecurityNumberInput
      value={securityNumber}
      onChange={onChangeSingleInput}
    />
    <CardPasswordInput
      fields={cardPassword}
      onChange={onChangeMultipleInput}
    />
  </form>
);
export default AddCardForm;
