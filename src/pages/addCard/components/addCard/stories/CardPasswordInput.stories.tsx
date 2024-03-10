import { Meta, StoryObj } from "@storybook/react";
import CardPasswordInput from "../CardPasswordInput";
import { isNumber } from "../../../../../utils/validationUtils";
import useInput from "../../../../../hooks/useInput";

const meta = {
  title: "AddCard/CardPasswordInput",
  component: CardPasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardPasswordInput>;

type Story = StoryObj<typeof CardPasswordInput>;

const TestCarPasswordInput = () => {
  const {
    value: firstCardPassword,
    handleChange: handleFirstCardPasswordChange,
  } = useInput({ validate: isNumber });
  const {
    value: secondCardPassword,
    handleChange: handleSecondCardPasswordChange,
  } = useInput({ validate: isNumber });

  return (
    <CardPasswordInput
      firstValue={firstCardPassword}
      secondValue={secondCardPassword}
      onFirstValueChange={handleFirstCardPasswordChange}
      onSecondValueChange={handleSecondCardPasswordChange}
    />
  );
};

export const Basic: Story = {
  render: () => <TestCarPasswordInput />,
};

export default meta;
