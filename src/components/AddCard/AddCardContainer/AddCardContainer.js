import AddCardForm from "../AddCardForm";

import { Title, Main } from "../../style/layout";

import useCardNumberFields from "./hooks/useCardNumberFields";

const AddCardContainer = () => {
  const { fields, handleChange } = useCardNumberFields();

  return (
    <>
      <Title>카드 추가</Title>
      <Main>
        <AddCardForm fields={fields} onChange={handleChange} />
      </Main>
    </>
  );
};
export default AddCardContainer;
