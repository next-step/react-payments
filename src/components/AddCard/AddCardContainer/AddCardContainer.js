import AddCardForm from "../AddCardForm";

import { Title } from "../../style/layout";

import useCardNumberFields from "./hooks/useCardNumberFields";

const AddCardContainer = () => {
  const { fields, handleChange } = useCardNumberFields();

  return (
    <>
      <Title>카드 추가</Title>
      <main>
        <AddCardForm fields={fields} onChange={handleChange} />
      </main>
    </>
  );
};
export default AddCardContainer;
