import { Input } from "@/components/primitive/Input";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent } from "react";

const meta: Meta<typeof Input> = {
  title: "Primitive/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description: "input tag의 type",
    },
    onChange: {
      description: "(e: React.ChangeEvent<HTMLInputElement>) => string | void;",
    },
    inputStyle: {
      description: "input tag의 style",
    },
    customType: {
      description:
        "textOnly, numberOnly 등 input tag의 type이 아닌 custom type",
    },
    style: { description: "input tag가 아닌 InputBox의 style" },
  },
  decorators: [
    (Story) => {
      const props = Object(Story().props);
      const defaultChange = (e: ChangeEvent<HTMLInputElement>) =>
        e.target.value;
      return (
        <>
          <Input {...props} onChange={props.onChange ?? defaultChange} />
        </>
      );
    },
  ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    customType: "textOnly",
  },
};

export const NumberOnly: Story = {
  args: {
    customType: "numberOnly",
  },
};
