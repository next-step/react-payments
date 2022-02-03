import ExpiryDateInput from ".";

import useAddCardFormFields from "../AddCardContainer/hooks/useAddCardFormFields";

export default {
  title: "Component/Input",
  component: ExpiryDateInput,
};

export const expiryDate = () => {
  const {
    fields: { expiryDate },
    handleChangeMultipleInput,
  } = useAddCardFormFields();

  return (
    <ExpiryDateInput fields={expiryDate} onChange={handleChangeMultipleInput} />
  );
};
