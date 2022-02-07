import { within, userEvent } from "@storybook/testing-library";

import ExpiryDateInput from ".";

import { EXPIRY_DATE_LABEL } from "../constants";

import useAddCardFormFields from "../../../page/AddCardPage/hooks/useAddCardFormFields";

export default {
  title: "Component/Input",
  component: ExpiryDateInput,
};

export const BasicForm = () => {
  const {
    fields: { expiryDate, error },
    handleChangeMultipleInput,
    handleErrorChange,
  } = useAddCardFormFields();

  return (
    <ExpiryDateInput
      fields={expiryDate}
      error={error.expiryDate}
      onChange={handleChangeMultipleInput}
      onErrorChange={handleErrorChange}
    />
  );
};

export const ErrorForm = () => {
  const {
    fields: { expiryDate, error },
    handleChangeMultipleInput,
    handleErrorChange,
  } = useAddCardFormFields();

  return (
    <ExpiryDateInput
      fields={expiryDate}
      error={error.expiryDate}
      onChange={handleChangeMultipleInput}
      onErrorChange={handleErrorChange}
    />
  );
};

BasicForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByLabelText(EXPIRY_DATE_LABEL.month),
    "12",
    {
      delay: 200,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(EXPIRY_DATE_LABEL.year),
    "30",
    {
      delay: 200,
    }
  );
};

BasicForm.storyName = "Expiry Date Input";

ErrorForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByLabelText(EXPIRY_DATE_LABEL.month),
    "20",
    {
      delay: 200,
    }
  );

  await userEvent.type(
    canvas.getByLabelText(EXPIRY_DATE_LABEL.year),
    "30",
    {
      delay: 200,
    }
  );
};

ErrorForm.storyName = "Expiry Date Input With Error";
