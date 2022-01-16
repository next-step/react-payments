import styled from "@emotion/styled";

import CardNumberInput from "../CardNumberInput";
import ExpiryDateInput from "../ExpiryDateInput";

const AddCardForm = ({
  fields: { cardNumbers, expiryDate },
  handleChangeMultipleInput,
}) => (
  <Form>
    <CardNumberInput
      fields={cardNumbers}
      onChange={handleChangeMultipleInput}
    />
    <ExpiryDateInput fields={expiryDate} onChange={handleChangeMultipleInput} />
  </Form>
);

const Form = styled.form`
  & > div + div {
    margin-top: 20px;
  }
`;

export default AddCardForm;
