import CardNumberInput from "../CardNumberInput";
import ExpiryDateInput from "../ExpiryDateInput";

const AddCardForm = ({
  fields: { cardNumbers, expiryDate },
  onChangeMultipleInput,
}) => (
  <form>
    <CardNumberInput fields={cardNumbers} onChange={onChangeMultipleInput} />
    <ExpiryDateInput fields={expiryDate} onChange={onChangeMultipleInput} />
  </form>
);

export default AddCardForm;
