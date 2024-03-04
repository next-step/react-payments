import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "./CardNumberInput";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof CardNumberInput> = {
  component: CardNumberInput,
  title: "CardRegister/Component/CardNumberInput",
};

export default meta;

type Story = StoryObj<typeof CardNumberInput>;

export const Primary: Story = {
  args: {},
};

Primary.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const firstNumberInput = canvas.getByTitle("first number of card");

  await step("첫 3자리만 입력하면 두번째 인풋이 없어야 함", async () => {
    await userEvent.type(firstNumberInput, "123");

    try {
      await canvas.findByTitle("second number of card");
    } catch (error) {
      expect(false).toBe(false);
    }
    await userEvent.clear(firstNumberInput);
  });
  await step("첫 4자리 입력하면 두번째 인풋이 있어야 함", async () => {
    await userEvent.type(firstNumberInput, "1234");
    const secondInput = await canvas.findByTitle("second number of card");
    expect(!!secondInput).toBe(true);
    await userEvent.clear(firstNumberInput);
  });

  await step(
    "첫 4자리 입력하면 두번째 인풋이 있다가 백스페이스와 함께 다시 사라짐",
    async () => {
      await userEvent.type(firstNumberInput, "1234");
      let secondInput = await canvas.findByTitle("second number of card");
      expect(!!secondInput).toBe(true);

      await userEvent.type(firstNumberInput, "{backspace}");
      try {
        secondInput = await canvas.findByTitle("second number of card");
      } catch (error) {
        expect(false).toBe(false);
      }
      await userEvent.clear(firstNumberInput);
    }
  );

  await step(
    "첫 인풋에서 16자리를 입력하면 모든 인풋에 숫자가 채워져야함",
    async () => {
      await userEvent.type(firstNumberInput, "1234123412341234");
      const secondNumberInput = await canvas.findByTitle(
        "second number of card"
      );
      const thirdNumberInput = await canvas.findByTitle("third number of card");
      const fourthNumberInput = await canvas.findByTitle(
        "fourth number of card"
      );
      expect(
        !!firstNumberInput &&
          !!secondNumberInput &&
          !!thirdNumberInput &&
          !!fourthNumberInput
      ).toBe(true);
    }
  );
};
