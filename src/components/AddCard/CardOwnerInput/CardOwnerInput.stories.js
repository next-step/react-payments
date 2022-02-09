import { within, userEvent } from "@storybook/testing-library";

import CardOwnerInput from "./CardOwnerInput";

import useAddCardFormFields from "../../../page/AddCardPage/hooks/useAddCardFormFields";

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

Input.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByLabelText("카드 소유자이름(선택)"),
    "HEAEUN HEAEUN HEAEUN",
    {
      delay: 100,
    }
  );
};
