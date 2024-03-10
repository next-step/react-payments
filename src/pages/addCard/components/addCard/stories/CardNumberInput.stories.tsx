import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../CardNumberInput";
import useCardNumberInput from "../../../hooks/useCardNumberInput";

const meta = {
  title: "AddCard/CardNumberInput",
  component: CardNumberInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInput>;

type Story = StoryObj<typeof CardNumberInput>;

const TestCardNumberInput = () => {
  const {
    displayedValue: displayedCardNumber,
    handleChange: handleCardNumberChange,
  } = useCardNumberInput();
  return (
    <CardNumberInput
      value={displayedCardNumber}
      onChange={handleCardNumberChange}
    />
  );
};

export const Basic: Story = {
  render: () => <TestCardNumberInput />,
};

export default meta;
