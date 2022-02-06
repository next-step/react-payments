import CardOwnerInput from "./CardOwnerInput";

import useAddCardFormFields from "../AddCardContainer/hooks/useAddCardFormFields";

export default {
  title: "Component/Input",
  component: CardOwnerInput,
};

export const Input = () => {
  const {
    fields: { cardOwner },
    handleChangeSingleInput,
  } = useAddCardFormFields();

  return (
    <CardOwnerInput
      value={cardOwner}
      onChange={handleChangeSingleInput}
    />
  );
};

Input.storyName = "Card Owner";
