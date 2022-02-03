import AddCardForm from "../AddCardForm";

import useAddCardFormFields from "./hooks/useAddCardFormFields";

import { Title } from "../../style/layout";

import Card from "../../Card";

const AddCardContainer = () => {
  const {
    fields,
    handleChangeSingleInput,
    handleChangeMultipleInput,
  } = useAddCardFormFields();

  const {
    cardNumbers: { firstField, secondField },
    expiryDate: { yearField, monthField },
    cardOwner,
  } = fields;

  return (
    <>
      <Title>카드 추가</Title>
      <main>
        <Card
          data={{
            numbers: [firstField, secondField],
            expiryDate: `${monthField}/${yearField}`,
            owner: cardOwner,
          }}
        />
        <AddCardForm
          fields={fields}
          onChangeSingleInput={handleChangeSingleInput}
          onChangeMultipleInput={handleChangeMultipleInput}
        />
      </main>
    </>
  );
};
export default AddCardContainer;
