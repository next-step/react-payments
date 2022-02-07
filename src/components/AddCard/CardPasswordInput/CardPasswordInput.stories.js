import { within, userEvent } from "@storybook/testing-library";

import PasswordInput from ".";

import useAddCardFormFields from "../../../page/AddCardPage/hooks/useAddCardFormFields";

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

cardPassword.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(
    canvas.getByLabelText("비밀번호 첫번째 자리"),
    "1",
    {
      delay: 100,
    }
  );
  await userEvent.type(
    canvas.getByLabelText("비밀번호 두번째 자리"),
    "1",
    {
      delay: 100,
    }
  );
};
