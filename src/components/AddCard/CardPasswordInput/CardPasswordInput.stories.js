import PasswordInput from ".";

import useAddCardFormFields from "../AddCardContainer/hooks/useAddCardFormFields";

export default {
  title: "Component/Input",
  component: PasswordInput,
};

export const cardPassword = () => {
  const {
    fields: { cardPassword },
    handleChangeMultipleInput,
  } = useAddCardFormFields();

  return (
    <PasswordInput
      fields={cardPassword}
      onChange={handleChangeMultipleInput}
    />
  );
};
