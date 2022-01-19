import AddCardForm from "../AddCardForm";

import { Title } from "../../style/layout";

import useAddCardFormFields from "./hooks/useAddCardFormFields";

const AddCardContainer = () => {
  const {
    fields,
    handleChangeSingleInput,
    handleChangeMultipleInput,
  } = useAddCardFormFields();

  return (
    <>
      <Title>카드 추가</Title>
      <main>
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
