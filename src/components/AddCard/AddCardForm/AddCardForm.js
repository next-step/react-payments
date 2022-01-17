import styled from "@emotion/styled";

import CardNumberInput from "../CardNumberInput";
import ExpiryDateInput from "../ExpiryDateInput";

const AddCardForm = ({
  fields: { cardNumbers, expiryDate },
  handleChangeMultipleInput,
}) => (
  <form>
    <CardNumberInput
      fields={cardNumbers}
      onChange={handleChangeMultipleInput}
    />
    <ExpiryDateInput fields={expiryDate} onChange={handleChangeMultipleInput} />
  </form>
);

export default AddCardForm;
