import styled from "@emotion/styled";

import useAddCardFormFields from "./hooks/useAddCardFormFields";

import AddCardForm from "../AddCardForm";

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
        <FormCard
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

const FormCard = styled(Card)`
  margin: 0 auto 40px;
`;

export default AddCardContainer;
