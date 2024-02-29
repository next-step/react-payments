import { Meta, StoryObj } from "@storybook/react";
import LimitedLengthInput from "./LimitedLengthInput";
import { within } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

const meta: Meta<typeof LimitedLengthInput> = {
  component: LimitedLengthInput,
  title: "LimitedLengthInput",
};

export default meta;

type Story = StoryObj<typeof LimitedLengthInput>;

const maxLength = 7;

export const TextInput: Story = {
  args: {
    maxLength: maxLength,
    type: "text",
    colorTheme: "primary",
  },
};

export const PasswordInput: Story = {
  args: {
    maxLength: maxLength,
    type: "password",
    colorTheme: "primary",
  },
};

TextInput.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByTitle<HTMLInputElement>("limited length input");

  await step("일반 타이핑", async () => {
    await userEvent.type(input, "1");
    expect(input.value).toBe("1");
  });

  await step("글자수를 초과하는 타이핑", async () => {
    await userEvent.type(input, "1111111");
    expect(input.value.length <= maxLength).toBe(true);
  });

  await step("글자수를 초과해서 타이핑 후 삭제", async () => {
    const willTypingWords = "11111111";
    await userEvent.type(input, willTypingWords);
    await userEvent.type(input, "{backspace}");

    expect(input.value.length).toBe(6);
  });
};

PasswordInput.play = async ({ canvasElement, step }) => {
  const canvas = within(canvasElement);
  const input = canvas.getByTitle<HTMLInputElement>("limited length input");

  await step("타이핑 후 비밀번호로 표시되는지 확인", async () => {
    expect(input.type).toBe("password");
  });

  await step("글자수를 초과하는 타이핑", async () => {
    await userEvent.type(input, "1111111");
    expect(input.value.length <= maxLength).toBe(true);
  });

  await step("글자수를 초과해서 타이핑 후 삭제", async () => {
    const willTypingWords = "11111111";
    await userEvent.type(input, willTypingWords);
    await userEvent.type(input, "{backspace}");

    expect(input.value.length).toBe(6);
  });
};
