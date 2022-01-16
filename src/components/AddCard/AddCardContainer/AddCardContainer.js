import AddCardForm from "../AddCardForm";

import { Title } from "../../style/layout";

import useCardNumberFields from "./hooks/useCardNumberFields";

const AddCardContainer = () => {
  const { fields, handleChangeSingleInput, handleChangeMultipleInput } =
    useCardNumberFields();

  return (
    <>
      <Title>카드 추가</Title>
      <main>
        <AddCardForm
          fields={fields}
          onChangeSingleInput={handleChangeSingleInput}
          handleChangeMultipleInput={handleChangeMultipleInput}
        />
      </main>
    </>
  );
};
export default AddCardContainer;
