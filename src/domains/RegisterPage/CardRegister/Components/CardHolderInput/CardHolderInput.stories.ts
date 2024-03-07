import { Meta, StoryObj } from "@storybook/react";
import CardHolderInput from "./CardHolderInput";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CardHolderInput> = {
  component: CardHolderInput,
  title: "CardRegister/Component/CardHolderInput",
};

export default meta;

type Story = StoryObj<typeof CardHolderInput>;

export const Primary: Story = {
  args: {},
};

Primary.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);

  const cardHolderInput = canvas.getByTitle<HTMLInputElement>("CardHolder");

  step("30글자 초과 입력시 입력 안되도록", async () => {
    await userEvent.type(cardHolderInput, "012345678901234567890123456789123");
    expect(cardHolderInput.value).toBe("012345678901234567890123456789");
  });
};
