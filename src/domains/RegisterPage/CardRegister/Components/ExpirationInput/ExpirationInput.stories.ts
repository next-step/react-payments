import { Meta, StoryObj } from "@storybook/react";
import ExpirationInput from "./ExpirationInput";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof ExpirationInput> = {
  component: ExpirationInput,
  title: "CardRegister/Component/ExpirationInput",
};

export default meta;

type Story = StoryObj<typeof ExpirationInput>;

export const FixedValue: Story = {
  args: {
    value: { month: "06", year: "12" },
  },
};

export const Primary: Story = {
  args: {},
};

Primary.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const monthInput = canvas.getByTitle<HTMLInputElement>("Expiration Month");
  const yearInput = canvas.getByTitle<HTMLInputElement>("Expiration Year");

  await step("31월 입력을 방지", async () => {
    await userEvent.type(monthInput, "31");
    expect(monthInput.value).toBe("3");
    await userEvent.clear(monthInput);
  });
  await step("12월 24년 입력 확인", async () => {
    await userEvent.type(monthInput, "1224");
    expect(monthInput.value).toBe("12");
    expect(yearInput.value).toBe("24");
    await userEvent.clear(monthInput);
  });
  await step("backspace 4번에 모두 삭제", async () => {
    await userEvent.type(monthInput, "1224");
    await userEvent.keyboard("{backspace}");
    await userEvent.keyboard("{backspace}");
    await userEvent.keyboard("{backspace}");
    await userEvent.keyboard("{backspace}");
    expect(monthInput.value).toBe("");
    expect(yearInput.value).toBe("");
  });
};
