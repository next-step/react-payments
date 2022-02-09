import { within, userEvent } from "@storybook/testing-library";

import CardNumberInput from ".";

import { CARD_NUMBER_LABEL } from "../constants";

import useAddCardFormFields from "../../../page/AddCardPage/hooks/useAddCardFormFields";

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

cardNumber.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByLabelText(CARD_NUMBER_LABEL.first),
    "1111",
    {
      delay: 100,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(CARD_NUMBER_LABEL.second),
    "1111",
    {
      delay: 100,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(CARD_NUMBER_LABEL.third),
    "1111",
    {
      delay: 100,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(CARD_NUMBER_LABEL.fourth),
    "1111",
    {
      delay: 100,
    }
  );
};
