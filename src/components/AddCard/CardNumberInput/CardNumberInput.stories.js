import CardNumberInput from ".";

import useAddCardFormFields from "../AddCardContainer/hooks/useAddCardFormFields";

export default {
  title: "Component/Input",
  component: CardNumberInput,
};

export const cardNumber = () => {
  const {
    fields: { cardNumbers },
    handleChangeMultipleInput,
  } = useAddCardFormFields();

  return (
    <CardNumberInput
      fields={cardNumbers}
      onChange={handleChangeMultipleInput}
    />
  );
};
