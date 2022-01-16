import CardNumberInput from "../CardNumberInput";

const AddCardForm = ({
  fields,
  handleChangeSingleInput,
  handleChangeMultipleInput,
}) => (
  <form>
    <CardNumberInput
      fields={fields.cardNumbers}
      onChange={handleChangeMultipleInput}
    />
  </form>
);
export default AddCardForm;
